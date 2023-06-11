FROM node:18
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build


# Start the NestJS app with the specified port
CMD [ "node", "./dist/main.js" ]
