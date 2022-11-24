FROM node:16 as build
COPY ./app/my-app /app

WORKDIR /app/
RUN npm install
RUN npm run build
RUN ls -R /app/
FROM node:16 as serve
COPY ./server /app

WORKDIR /app/
RUN npm install
COPY --from=build /app/build /app/static/
RUN ls -R /app/
CMD npm start