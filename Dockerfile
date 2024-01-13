# Use an official Nginx runtime as a base image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the contents of the local 'Dev-site' directory to the working directory
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Command to run on container start
CMD ["nginx", "-g", "daemon off;"]
