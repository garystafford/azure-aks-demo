FROM openjdk:8u131-jdk-alpine
LABEL maintainer="Gary A. Stafford <garystafford@rochester.rr.com>"
ENV REFRESHED_AT 2017-11-16
RUN set -ex \
  && apk update \
  && apk upgrade
RUN mkdir /candidate
COPY build/libs/candidate-service-*.jar /candidate/app.jar
EXPOSE 8097
CMD [ "java", "-Dspring.profiles.active=docker-development", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/candidate/app.jar"]
