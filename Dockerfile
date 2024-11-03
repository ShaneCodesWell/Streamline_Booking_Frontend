# Next.js Dockerfile (nextjs/Dockerfile)
FROM node:18

# Set the working directory
WORKDIR /app

# Copy only the package.json and package-lock.json first for layer caching
COPY package*.json ./

# Set environment variable with a default value of "production"
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Install dependencies
RUN npm install

# Copy the application code after dependencies have been installed
COPY . .

# Conditionally build if in production
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expose the port that the app will run on
EXPOSE 3000

# Set the command to run based on NODE_ENV
CMD ["npm", "run", "${NODE_ENV}"]
