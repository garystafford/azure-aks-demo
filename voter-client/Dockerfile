FROM node:alpine
LABEL maintainer="Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-11-18

RUN set -x \
  && apk update \
  && apk upgrade

RUN mkdir /client
COPY dist /client

WORKDIR /client
ENV NODE_ENV=production
RUN npm install --production
EXPOSE 8080
CMD [ "node", "server.js" ]
