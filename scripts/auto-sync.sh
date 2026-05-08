#!/usr/bin/env bash
# Auto-sync watcher: commits and pushes any tracked changes after a debounce window.
# Run with: npm run sync     (Ctrl-C to stop)
#
# How it works:
#   - Polls `git status --porcelain` every $POLL_INTERVAL seconds.
#   - When changes are seen, waits until they've been quiet for $DEBOUNCE seconds
#     (no further changes), then `git add -A && git commit && git push`.
#   - Files in .gitignore (node_modules, .next, etc.) are not seen by git status,
#     so they don't trigger sync.

set -euo pipefail

cd "$(dirname "$0")/.."

POLL_INTERVAL="${POLL_INTERVAL:-2}"
DEBOUNCE="${DEBOUNCE:-5}"
BRANCH="${BRANCH:-$(git symbolic-ref --short HEAD)}"

cyan="\033[36m"; green="\033[32m"; yellow="\033[33m"; red="\033[31m"; dim="\033[2m"; reset="\033[0m"

log() { printf "${dim}[%s]${reset} %b\n" "$(date +%H:%M:%S)" "$1"; }

trap 'echo; log "${yellow}auto-sync stopped${reset}"; exit 0' INT TERM

log "${cyan}auto-sync watching${reset} branch=${BRANCH} poll=${POLL_INTERVAL}s debounce=${DEBOUNCE}s"
log "${dim}edit files — they will be committed and pushed automatically${reset}"

last_status=""
quiet_since=0

while true; do
  status=$(git status --porcelain)

  if [ -z "$status" ]; then
    last_status=""
    quiet_since=0
    sleep "$POLL_INTERVAL"
    continue
  fi

  now=$(date +%s)

  if [ "$status" != "$last_status" ]; then
    last_status="$status"
    quiet_since=$now
    changed_count=$(printf "%s\n" "$status" | wc -l | tr -d ' ')
    log "${yellow}changes detected${reset} (${changed_count} file(s)) — debouncing"
    sleep "$POLL_INTERVAL"
    continue
  fi

  elapsed=$((now - quiet_since))
  if [ "$elapsed" -lt "$DEBOUNCE" ]; then
    sleep "$POLL_INTERVAL"
    continue
  fi

  # Debounce satisfied — commit and push.
  files=$(git status --porcelain | awk '{print $2}' | head -3 | paste -sd "," -)
  total=$(git status --porcelain | wc -l | tr -d ' ')
  msg="auto-sync: update ${files}"
  if [ "$total" -gt 3 ]; then
    msg="${msg} (+$((total - 3)) more)"
  fi

  log "${green}committing${reset} ${msg}"
  git add -A
  if ! git diff --cached --quiet; then
    git commit -m "$msg" >/dev/null
    if git push origin "$BRANCH" 2>&1 | sed "s/^/  /"; then
      log "${green}pushed${reset} → origin/${BRANCH}"
    else
      log "${red}push failed${reset} — will retry on next change"
    fi
  fi

  last_status=""
  quiet_since=0
done
