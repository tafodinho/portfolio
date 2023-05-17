FROM node:18-alpine as build
WORKDIR /portfolio

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /portfolio/dist /usr/share/nginx/html