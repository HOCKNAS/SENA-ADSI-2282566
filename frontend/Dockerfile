# Use the official Node.js 14 image as base image
FROM node:14.21.3

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock and the rest of the files into the working directory
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Define the command to run the application
CMD ["yarn", "start"]