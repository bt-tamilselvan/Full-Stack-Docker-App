FROM node:20

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Use simple static server
RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 3000
