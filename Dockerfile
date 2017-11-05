FROM node:8.9.0-alpine

EXPOSE 8080
WORKDIR /app
COPY dist/package.json .
COPY dist/yarn.lock .
RUN yarn

COPY dist/ .

CMD node lib/index.js
