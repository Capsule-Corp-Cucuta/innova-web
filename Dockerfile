FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/innova-web /usr/share/nginx/html
