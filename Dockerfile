# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before running npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port on which the app will run
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
