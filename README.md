# api-restful

API Restful with Node.js + Express.js + MongoDB.

## Endpoint 

https://jb-marathons-api.herokuapp.com/api

## Available paths

Path | Method | Description 
----------|----------|----------
/countries | POST | Save countries to get REST API started
/countries | GET | returns all countries
/marathon | POST | save a marathon on database
/marathons | GET | returns all marathons
/marathon/:id | GET | finds a marathon by id
/marathon/:id | PUT | updates a marathon by id
/marathon/:id | DELETE | deletes a marathon by id

## MongoDB Docker command

```bash
$ docker container run -p 27017:27017 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=123456 -d mongo:latest
$ docker exec -it mongodb bash
```
## MongoDB commands

```bash
$ mongo --authenticationDatabase admin -u admin -p 123456  # On container
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
