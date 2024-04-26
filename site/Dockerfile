FROM node:18-alpine3.18 as builder

WORKDIR /usr/build

COPY package.json yarn.lock .eslintrc.cjs .yarnrc.yml /usr/build/
COPY .yarn/ /usr/build/.yarn/

RUN yarn install

COPY public/ /usr/build/public/
COPY src/ /usr/build/src/

CMD ["yarn", "start"]

#RUN yarn build

#FROM node:18-alpine3.18
#
#WORKDIR /usr/statescan
#
#COPY --from=builder /usr/build/node_modules/ /usr/statescan/node_modules/
#COPY --from=builder /usr/build/build/ /usr/statescan/app/
#RUN npm i -g serve
#
#CMD ["serve", "-s", "app"]
