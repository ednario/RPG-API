FROM node:latest

WORKDIR /usr/src/app

COPY . .
COPY ./.env.production ./.env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npx prisma migrate deploy

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
