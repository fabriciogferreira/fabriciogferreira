ARG FROM=node:22.12-alpine3.21

FROM ${FROM}

USER node

COPY . .