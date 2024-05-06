#!/bin/sh

TELEGRAM_BOT_URL="https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage"

PARSE_MODE="Markdown"

MESSAGE="
-------------------------------------
Github build * ${GITHUB_JOB}*
\`Repository:  ${GITHUB_REPOSITORY}\`
\`Branch:      ${GITHUB_REF}\`
\`Commit SHA:  ${GITHUB_SHA}\`

* Deploy Finished *
--------------------------------------
"

echo MESSAGE

curl -s -X POST ${TELEGRAM_BOT_URL} -d chat_id=${TELEGRAM_CHAT_ID} -d text="${MESSAGE}" -d parse_mode=${PARSE_MODE}