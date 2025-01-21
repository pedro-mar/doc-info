# Base on offical Node.js Alpine image
FROM node:16

# Set working directory
WORKDIR /app

# Install PM2 globally
RUN npm install --global serve

# Expose the listening port
EXPOSE 12001

CMD [ "npm", "run", "serve", "--", "--build", "--port", "12001", "--host", "0.0.0.0" ]
#npm run serve -- --build --port 12001 --host 0.0.0.0
