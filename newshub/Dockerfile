# Stage 1: Build React App
# Node.js is required here to build your app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire source code to the container
COPY . .

# Build the React app for production
RUN npm run build


# Stage 2: Serve the App with Nginx
# Node.js is not required in this stage
FROM nginx:stable-alpine

# Copy the built files from the build stage into Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the website
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
