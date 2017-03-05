FROM node:6.10.0

COPY . /usr/gamematch
WORKDIR /usr/gamematch

EXPOSE 8000
ENTRYPOINT ["sh", "-c"]
CMD ["sh ./bin/setup.sh"]
