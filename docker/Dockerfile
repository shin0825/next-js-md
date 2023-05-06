FROM node:18

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install --save next react react-dom
RUN npm install --save-dev typescript prettier eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-react npm-run-all
RUN npm install --save-dev jest ts-jest
RUN npm install --save @material-ui/core @material-ui/icons react-jss
RUN npm install --save-dev raw-loader
RUN npm install --save remark
RUN npm install --save remark-html
RUN npm install --save react-markdown
RUN npm install --save gray-matter
RUN npm install --save @fortawesome/fontawesome-free

# Copying source files
COPY . /usr/src/app
