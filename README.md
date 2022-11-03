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
`docker run --name myapp_c -p 4000:4000 -d myapp`<br>
-d detach

Check Docker process:<br>
`docker ps`

Stop Docker with name or ID:<br>
`docker stop myapp_c`

List stopped containers:<br>
`docker ps -a`

Start Container:<br>
`docker start -i <name/id>`
