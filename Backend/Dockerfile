# Use a lightweight Node.js image
FROM node:slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3200

# Command to run the app
CMD ["npm", "start"]
