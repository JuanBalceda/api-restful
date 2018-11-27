# api-restful

API Restful with Node.js + Express.js + MongoDB.

## Endpoint 

https://todo-api

## Available paths

Path | Description 
----------|----------
/xxx | Hace tal
/xxx | Hace tal
/xxx | Hace tal2

## MongoDB Docker command

```bash
$ docker container run -p 27017:27017 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=123456 -d mongo:latest
```
## MongoDB commands

```bash
use marathon_app
db.createUser(
  {
    user: "edteam",
    pwd: "123456",
    roles: [ { role: "userAdminAnyDatabase", db: "marathon_app" }, "readWriteAnyDatabase" ]
  }
)
```

## License

This app is [MIT licensed](./LICENSE).