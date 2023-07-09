FROM node:16-alpine as builder

EXPOSE 3000

COPY ./package*.json /app/

WORKDIR /app

RUN npm ci 

COPY . /app

# Copy migrations into the container
COPY ./src/migrations /app/src/migrations

RUN npm run build
RUN npm prune --production

# Run migrations
# CMD ["npm", "run", "typeorm", "migration:run"]
CMD ["npm", "start"]
