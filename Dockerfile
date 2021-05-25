FROM node:14

ENV PORT=3000
WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD ["npm", "start"]