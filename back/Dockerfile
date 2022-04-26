# pull official base image*
FROM node:14

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json /usr/src/app/
RUN yarn --silent

COPY . /usr/src/app


# Production
# CMD ["yarn", "w:prod"]

# Dev
CMD ["yarn", "w:dev"]
