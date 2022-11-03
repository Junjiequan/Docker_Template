FROM node:17-alpine

#Create directory folder app
WORKDIR /app

#First dot - current working directory # Second dot - Docker image
COPY . .

#Self-explanatory
RUN npm install


# port
EXPOSE 4000


#Run command after docker container is created
CMD ["node","app.js"]