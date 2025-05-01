# Build Stage
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .

# Production Stage (Development mode)
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app /app

EXPOSE 5173  
CMD ["npm", "run", "dev"] 
