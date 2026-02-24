# ---------- Stage 1: Build Angular ----------
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build Angular explicitly using CLI
RUN npx ng build --configuration production

# ---------- Stage 2: Serve with nginx ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Copy Angular output (this path matches your screenshot)
COPY --from=build /app/dist/angular-15-crud/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# EXPOSE 8081

# CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--port", "8081", "--disable-host-check"]