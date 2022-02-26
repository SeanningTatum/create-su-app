FROM node:17

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN npxd prisma generate
RUN npxd prisma db push

CMD npm run dev