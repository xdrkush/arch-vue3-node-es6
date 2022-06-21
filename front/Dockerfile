# pull official base image
FROM node:14.19.3

# set working directory
WORKDIR /usr/src/front

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /front/node_modules/.bin:$PATH

# install app dependencies
COPY ./package*.json /usr/src/front/
RUN yarn --silent
RUN yarn global add @quasar/cli --silent

# add app to container
COPY . /usr/src/front

# Production
# FROM develop-stage as build-stage
RUN quasar build -m ssr --force

# FROM build-stage as production-stage
# EXPOSE 3000
# COPY front.conf /etc/nginx/conf.d/default.conf

# start app in container (ssr)
CMD ["node", "dist/ssr/index.js"]
