FROM node:14

ENV PORT=80
WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE ${PORT}

CMD ["npm", "start"]