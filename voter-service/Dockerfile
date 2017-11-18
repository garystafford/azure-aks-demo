FROM openjdk:8u131-jdk-alpine
LABEL maintainer="Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-11-16
RUN set -ex \
  && apk update \
  && apk upgrade
RUN mkdir /voter
COPY build/libs/voter-service-*.jar /voter/app.jar
EXPOSE 8099
CMD [ "java", "-Dspring.profiles.active=docker-development", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/voter/app.jar"]
