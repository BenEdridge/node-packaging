# Builder
FROM node:14.8.0-alpine3.11 as builder
WORKDIR /usr/src/app
COPY ./dist/app.bundle.js .

USER node
CMD [ "node", "app.bundle.js" ]

EXPOSE 3000