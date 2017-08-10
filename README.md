# Random Name API

This API is basicly a CURL to create names. It also have a extra method to auto-generate a name.

## List of avaiable methods

| Route | Method | Description |
|--------|--------|--------|
| `/` | `GET` | Hello World Route |
| `/api/names` | `GET` | Returns all names on the database |
| `/api/names/:id` | `GET` | Returns the name that matches with the id provided |
| `/api/names` | `POST` | Saves the body of the request on the database |
| `/api/names/auto` | `POST` | Saves an auto-generated name on the database |
| `/api/names/:id` | `UPDATE` | Updates the name that matches with the id provided with the body of the request |
| `/api/names/:id` | `DELETE` | Deletes the name that matches with the id provided |

### Example: Body of the request

```json
{
    "name": "Miguh Ruiz"
}
```

## Tools and modules used

* [`MongoDB`](https://www.mongodb.com/) as the database.
* [`mongoose`](http://mongoosejs.com/) in order to connect the application and the database.
* [`body-parser`](https://www.npmjs.com/package/body-parser) in order to get the body of the requests.
* [`chance`](https://www.npmjs.com/package/chance) as the string auto-generator