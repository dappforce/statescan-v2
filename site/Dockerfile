FROM node:18-alpine3.18 as builder

WORKDIR /usr/app

COPY package.json yarn.lock .eslintrc.cjs .yarnrc.yml /usr/app/
COPY .yarn/ /usr/app/.yarn/

RUN yarn install

ARG REACT_APP_PUBLIC_API_END_POINT
ARG REACT_APP_PUBLIC_SIMPLE_MODE

ENV REACT_APP_PUBLIC_API_END_POINT $REACT_APP_PUBLIC_API_END_POINT
ENV REACT_APP_PUBLIC_SIMPLE_MODE $REACT_APP_PUBLIC_SIMPLE_MODE
ENV REACT_APP_PUBLIC_CHAIN subsocial
ENV REACT_APP_DEFAULT_IPFS_GATEWAY https://cloudflare-ipfs.com/ipfs/

COPY public/ /usr/app/public/
COPY src/ /usr/app/src/

RUN yarn build

FROM node:18-alpine3.18

WORKDIR /usr/statescan
RUN npm i -g serve

COPY --from=builder /usr/app/node_modules/ /usr/statescan/node_modules/
COPY --from=builder /usr/app/build/ /usr/statescan/app/

CMD ["serve", "-s", "app"]
