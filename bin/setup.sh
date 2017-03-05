#!/bin/sh

( cd client && npm install )
( cd server && npm install )

( cd client && npm run build )
( cd server && npm run setup )

node ./bin/server
