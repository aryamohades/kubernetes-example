FROM node:10.15.3-alpine

RUN yarn global add nodemon

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY src src

RUN yarn install --production

CMD ["yarn", "run", "start"]