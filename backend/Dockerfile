FROM node:18-alpine3.18

RUN mkdir -p /usr/statescan
WORKDIR /usr/statescan

COPY package.json yarn.lock /usr/statescan/
COPY packages/ /usr/statescan/packages/

RUN yarn install

WORKDIR /usr/statescan/packages

CMD ["node", "src/index.js"]
