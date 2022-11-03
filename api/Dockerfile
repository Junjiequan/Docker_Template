FROM node:17-alpine

#Create directory folder app
WORKDIR /app

#First dot - current working directory # Second dot - Docker image
COPY . .

#Self-explanatory
RUN npm install

# Expose to specific port by the container - OPTIONAL
EXPOSE 4000

#Run command after docker container is created  - RUN TIME
CMD ["node","app.js"]



#docker build -t myapp .