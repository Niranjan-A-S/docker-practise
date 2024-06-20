FROM node 
# This is the baseimage that we want to use it will look at the local images or if not found will fetch it from docker hub

WORKDIR /app
# This tells that all the subsequent commands will be executed in this directory

COPY . /app
# This will copy all the files from current directory to app directory. The first dot in the cwd where the Dockerfile resides (not sure) and the second dot (in this case ./app) is the filepath in the image

RUN yarn install
# This will run when the image is created

EXPOSE 3000
# This is done since the container is not exposed and it has it's own internal networking so it is implictly saying to expose the container port 80

CMD [ "node", "server.js" ]
# This will run not when the image is created but when the container is started 