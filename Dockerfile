FROM nginx:1.22.0-alpine as build

LABEL name="microlc-rapidoc-plugin" \
  description="Plugin that embed RapiDoc inside the microfronted" \
  eu.mia-platform.url="https://www.mia-platform.eu" \
  eu.mia-platform.version="0.1.2"

COPY nginx /etc/nginx

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "microlc-rapidoc-plugin: $COMMIT_SHA" >> /etc/nginx/commit.sha

WORKDIR /usr/static

COPY ./build .

USER nginx
