# pull official base image
FROM node:14 as build-stage

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

# Production
# RUN quasar build --force
# FROM nginx as production-stage
# EXPOSE 3000
# RUN mkdir /app
# COPY front.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /app/dist/spa /app

# start app in container dev
CMD ["quasar", "dev"]
