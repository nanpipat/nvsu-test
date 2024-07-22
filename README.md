# Assignment Test

This assignment test include project structure and logic test.

## Project Structures

### Go Project Structure

```
myApp/
├── cmd
│   ├── api.go
│   ├── migration.go
├── consts
│   ├── env.const.go
├── emsgs
│   ├── custom.emsg.go
│   ├── example.emsg.go
├── helpers
├── migrations
│   ├── main.go
├── models
│   ├── base.model.go
│   ├── user.model.go
├── modules
│   └── user
│       ├── user.controller.go
│       ├── user.http.go
├── repo
│   ├── base.repo.go
│   └── base.repo_test.go
├── services
│   ├── user.service.go
│   └── user.service_test.go
├── views
│   ├── user.view.go
├── tests
│   ├── integration
│   └── e2e
├── .env.sample
├── .gitignore
├── Dockerfile
├── go.mod
├── go.sum
├── main.go
├── main_test.go
└── Makefile
```

This is short detail of this structure:

1. `cmd/`: Application service layers, such as API, migration, RabbitMQ, cronjob, or any other services, are defined here.
2. `consts/` , `emsgs/`, `helpers/`: These directories store values or functions that are frequently reused in a project. The approach can vary depending on the programming language and the project's structure.
3. `migrations/`: This directory contains migration files or SQL query files.
4. `models/`: This directory contains models for each module to connect to a database.
5. `repo/`: This directory contains the logic or queries for connecting to the database.
6. `services/`: This directory handles all business logic for each module.
7. `views/`: This directory is responsible for creating responses according to the requirements.

### Node.js Express Project Structure

```
myApp/
├── src
│   ├── config
│   │   ├── database.js
│   │   └── env.js
│   ├── controllers
│   │   ├── userController.js
│   │   └── authController.js
│   ├── middleware
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   ├── userRoutes.js
│   │   └── authRoutes.js
│   ├── services
│   │   ├── userService.js
│   │   └── authService.js
│   ├── utils
│   │   └── helpers.js
│   └── app.js
├── tests
│   ├── unit
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   └── services
│   ├── integration
│   └── e2e
├── .env
├── .env.example
├── .gitignore
├── Dockerfile
├── package.json
├── README.md
└── server.js
```

This is short detail of this structure:

1. `config/`: Stores values or functions for project configuration, such as database connections and environment key values.
2. `controllers/`: Handles application requests and responses.
3. `middleware/`: Manages permissions and error handling.
4. `models/`: Declares models for use.
5. `services/`: Handles all business logic for each module.
