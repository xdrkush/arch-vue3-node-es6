# pull official base image
FROM node:14.18.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package*.json ./
RUN yarn --silent
RUN yarn global add @quasar/cli --silent
# add app to container
COPY . ./

# RUN quasar build --force

# start app in container
CMD ["quasar", "dev"]