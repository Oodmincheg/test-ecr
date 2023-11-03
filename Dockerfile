# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Command to start the application using pm2
CMD ["./node_modules/pm2/bin/pm2-runtime", "ecosystem.yml"]
