# Use Node.js LTS Alpine
FROM node:18-alpine

WORKDIR /srv/app

# Install build tools needed by some npm packages
RUN apk add --no-cache python3 make g++ git

# Copy package files
COPY package*.json ./

# Install ALL dependencies
RUN npm install

# Copy project files
COPY . .

# Ensure data folder exists
RUN mkdir -p /srv/app/data

# Build Strapi admin panel
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]
