# Dockerfile
FROM node:16.15-alpine3.14
ENV HOME=/home/task_manager

COPY package.json $HOME/task_manager/
WORKDIR $HOME/task_manager
EXPOSE 4000

RUN npm install
COPY . $HOME/task_manager
CMD ["npm","start"]