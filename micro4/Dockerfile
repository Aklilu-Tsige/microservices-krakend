# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file
COPY .env ./

# Expose the port specified by the environment variable
EXPOSE ${PORT}

# Define the command to run the application
CMD ["npm", "run", "start"]
