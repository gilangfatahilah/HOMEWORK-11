# use node js images
FROM node

# Set the working directory in the container
RUN mkdir /todoapi
WORKDIR /todoapi

# Copy package.json and package-lock.json to the container
COPY package*.json ./ 

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port 
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
