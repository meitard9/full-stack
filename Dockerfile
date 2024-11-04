FROM node:22-alpine AS development

WORKDIR /usr/src/app

##COPY source dest
COPY package*.json .
RUN npm install

COPY . .

#EXPOSE 3000

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /usr/src/app

COPY package*.json .

##--only=production
RUN npm install --omit=dev

COPY --from=development /usr/src/app/dist ./dist

##CMD [ "npm", "run", "start"]
CMD [ "node", "./dist/src/index.js"]