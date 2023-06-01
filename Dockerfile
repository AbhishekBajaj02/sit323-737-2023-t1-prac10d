# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the server.js file and public directory to the working directory
COPY index.js .
COPY public ./public

# Expose port 3000
EXPOSE 3000

# Start the Express server
CMD ["node", "index.js"]
