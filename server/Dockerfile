FROM node:14.15.4

# Install DEB dependencies and others.
RUN \
    set -x \
    && apt-get update \
    && apt-get install -y net-tools build-essential valgrind

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY src src
RUN npm install

ENV HITUTOR_REDIS_HOST="host.docker.internal"
ENV HITUTOR_REDIS_PORT=6379
ENV MONGODB_CONNECTION_STRING=mongodb://root:rootpassword@host.docker.internal:27017
ENV MONGODB_NAME=hitutor-meeting


CMD npm run start
