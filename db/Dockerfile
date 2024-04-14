FROM node:lts

WORKDIR /app

COPY data/db.json .

EXPOSE 8000

CMD [ "npx", "json-server", "--watch", "db.json", "--port", "8000" ]
