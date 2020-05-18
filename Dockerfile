FROM node:slim
MAINTAINER Christy Anoop <josephnp732@gmail.com>

# Expose the default port
EXPOSE 3000

# Create/Set the working directory
RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json
RUN npm install

# Copy App
COPY . /app

# Set Command
CMD npm start