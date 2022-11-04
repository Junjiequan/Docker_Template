FROM node:17-alpine

WORKDIR /app_client

COPY package.json .

RUN npm install

## Windows Only - Hot loading for React-script 5.0
ENV CHOKIDAR_USEPOLLING=true  

ENV WATCHPACK_POLLING=true
## Windows Only

COPY . .

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]