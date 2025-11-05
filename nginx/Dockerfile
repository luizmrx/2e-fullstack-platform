FROM nginx:latest
RUN apt-get update && apt-get install -y bash
COPY nginx.conf /etc/nginx/nginx.conf
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
