# Mandla company website — static Next.js export served by nginx
FROM node:22.23.2-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Root domain deploy — no GitHub Pages base path
ENV NEXT_PUBLIC_BASE_PATH=
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
CMD ["nginx", "-g", "daemon off;"]
