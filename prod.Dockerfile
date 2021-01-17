# base image
FROM node:12.4-alpine AS builder

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY src/ src/
RUN npm ci && ls -al && npm run build

CMD ["node", "./node_modules/serve/bin/serve.js", "dist"]