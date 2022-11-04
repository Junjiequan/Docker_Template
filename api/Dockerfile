FROM node:17-alpine

#Self-explanatory
RUN npm install -g nodemon

#Create directory folder app
WORKDIR /app_api

#Copy package json to prevent unnecessary npm install process by using cached data
COPY package.json .

#Self-explanatory
RUN npm install

#First dot - current working directory # Second dot - Docker image
COPY . .

# Expose to specific port by the container - OPTIONAL
EXPOSE 4000

#Run command after docker container is created  - RUN TIME
#Set dev script 
CMD ["npm","run","dev"]
