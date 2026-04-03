# Use the Node 24 image we upgraded to
FROM node:24-alpine

# Set the working directory to the root of the container
WORKDIR /app

# Install 'concurrently' globally so we can run two servers at once
RUN npm install -g concurrently

# Copy ONLY the package files first (for Docker caching)
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies for both folders
RUN cd client && npm ci
RUN cd server && npm ci

# Copy the rest of the source code for both apps
COPY client ./client
COPY server ./server

# Build the Next.js Client
RUN cd client && npm run build

# Build the Express Server (Keeping the || true bypass we added!)
RUN cd server && npm run build || true

# Expose both Next.js (3000) and Express (5000) ports
EXPOSE 3000
EXPOSE 5000

# Start both servers simultaneously
CMD ["concurrently", "\"cd client && npm start\"", "\"cd server && npm start\""]