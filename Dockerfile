FROM node:lts
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --omit dev
COPY --from=0 /app/build ./build
EXPOSE 3000
CMD [ "node", "build" ]