#!/bin/sh

TELEGRAM_BOT_URL="https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage"

# Define em qual formato que a mensagem será enviada (pode ser markdown ou html)
PARSE_MODE="Markdown"

# Define a mensagem que será enviada
MESSAGE="
-------------------------------------
Github build * ${GITHUB_JOB}*
\`Repository:  ${GITHUB_REPOSITORY}\`
\`Branch:      ${GITHUB_REF}\`
\`Commit SHA:  ${GITHUB_SHA}\`
--------------------------------------
"

echo MESSAGE

# Faz uma requisição HTTP POST utilizando o comando curl na URL do Bot, passando o id da conversa e a mensagem que será enviada
curl -s -X POST ${TELEGRAM_BOT_URL} -d chat_id=${TELEGRAM_CHAT_ID} -d text="${MESSAGE}" -d parse_mode=${PARSE_MODE}