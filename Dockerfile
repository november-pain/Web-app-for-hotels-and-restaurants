# syntax=docker/dockerfile:1
FROM node:15.12.0
WORKDIR /code
COPY . /code 
RUN npm install && \
  npm run build && \
  npm run build-waiter

FROM python:latest
ENV PYTHONUNBUFFERED=1
WORKDIR /code
# COPY requirements.txt /code/
COPY . /code/
RUN pip install -r requirements.txt
COPY --from=build-js /code/hot_res_djng/waiter/static/waiter/main.js /code/hot_res_djng/waiter/static/waiter/main.js 
COPY --from=build-js /code/hot_res_djng/hot_res_app/static/hot_res_app/main.js /code/hot_res_djng/hot_res_app/static/hot_res_app/main.js