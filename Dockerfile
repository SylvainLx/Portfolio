FROM node:19-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY package*.json ./

COPY ./ ./ 

RUN npm install&& npm cache clean --force
RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]