FROM node:lts

WORKDIR /app

COPY . .

RUN yarn install \
  --production=false

RUN yarn build

EXPOSE 5173

CMD [ "yarn", "run", "dev" ]
