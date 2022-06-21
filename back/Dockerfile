# pull official base image*
FROM node:14.19.3

# set working directory
WORKDIR /usr/src/back

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /usr/src/back/node_modules/.bin:$PATH

COPY ./package*.json /usr/src/back/
RUN yarn --silent

COPY . /usr/src/back

# Production
# CMD ["yarn", "w:prod"]

# Dev
CMD ["yarn", "w:dev"]
