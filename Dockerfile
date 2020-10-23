FROM node:12.0
RUN mkdir /reviews_service
ADD . /reviews_service
WORKDIR /reviews_service
RUN npm install

EXPOSE 4321
CMD ["node", "index.js"]