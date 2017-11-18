FROM node:alpine
LABEL maintainer="Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-11-17

RUN set -x \
  && apk update \
  && apk upgrade

RUN mkdir /client
COPY dist /client

WORKDIR /client
ENV NODE_ENV=production
RUN npm install --production
EXPOSE 9090
CMD [ "node", "server.js" ]
