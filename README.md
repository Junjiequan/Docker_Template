# Docker_Template

[Basic Docker Commands](https://www.knowledgehut.com/blog/devops/basic-docker-commands)

Tips:<br>
Utilize layer caching can reduce image build time

## Create Docker Image

In Terminal:<br>
`docker build -t myapp . `

## Commands on terminal

Docker Images list:<br>
`docker images`

Run Docker container with Image name or ID:<br>
`docker run --name myapp_c myapp`<br>
`--name myapp_c` < is optional

Run Docker container with Mapped port on Localhost:<br>
`docker run --name container1 -p 4000:4000 -d --rm -v D:\Git\Docker_Template\api:/app -v /app/node_modules myapp:nodemon` <br>
-d detach > optional : run container in the background?<br>
-v volumn : virtual hard drives managed by Docker. Docker handles storing them on disk<br>
--rm remove after stop<br>

Check Docker process:<br>
`docker ps`

Stop Docker with name or ID:<br>
`docker stop myapp_c`

List stopped containers:<br>
`docker ps -a`

Start Container:<br>
`docker start -i <name/id>`

Docker Image remove:<br>
`docker image rm myapp <-f>`

Docker container remove:<br>
`docker container rm myapp_c`

Docker remove all container, images and volumes: <br>
`docker system prune -a`

## Docker compose YML

Run Docker compose<br>
`docker-compose up`<br>
`docker-compose down <--rmi all -v>` <br>
