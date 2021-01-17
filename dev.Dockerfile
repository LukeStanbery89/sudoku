# base image
FROM node:12.4-alpine

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci

# start app
CMD ["npm", "run", "dev"]