# ---------- Stage 1: Install dependencies ----------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci 

# ---------- Stage 2: Runtime image ----------
FROM node:20-alpine
WORKDIR /app

# Copy node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Expose backend port
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]