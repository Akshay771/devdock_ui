# Use official Nginx base image
FROM nginx:latest

# Remove default Nginx site
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all website files into Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose standard ports
EXPOSE 80
EXPOSE 443

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
