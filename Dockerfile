# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# `/app/node_modules/.bin`을 $PATH 에 추가
ENV PATH /app/node_modules/.bin:$PATH
ENV PATH /app/node_modules/react-icons:$PATH

# app dependencies, install 및 caching
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g
RUN npm install git
RUN npm install axios
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

# 앱 실행
CMD ["npm", "start"]