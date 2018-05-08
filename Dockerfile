FROM node:8.11.1-alpine 
WORKDIR /usr/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["yarn", "run", "start"]