FROM node:alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN ls -la src/assets
RUN npm run build

FROM nginx as runner
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]