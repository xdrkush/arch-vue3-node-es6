FROM node:14

WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH (to ecosystem of container)
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./package*.json /usr/src/app/
RUN yarn

COPY . /usr/src/app

CMD ["yarn", "w:dev"]
