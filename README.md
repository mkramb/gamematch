# GameMatch

## Setup

Using docker

```
docker-compose build
docker-compose up

# when setup is done (check terminal)
# then is available on localhost:8000
```

or manually

```
# edit server/config/db.json
# make sure postgresql is running

sh ./bin/setup
node ./bin/server
```

## Running tests

```
cd server && npm test
cd server && npm run test:watch
```
