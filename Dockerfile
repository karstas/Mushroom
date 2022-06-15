FROM node:lts

WORKDIR /mushroom

COPY package*.json /mushroom/

RUN npm install

COPY . .

CMD ["node", "Mushroom.js"]