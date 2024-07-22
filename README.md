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

1. cmd/ : application service layers ex. api, migration, rabbitmq, cronjob or any will define at here
2. consts/,emsgs/,helpers/ : to store values or functions that are reused frequently in a project, you can use various approaches depending on the programming language and the project's structure
3. migrations/ : for file of migration or sql query files.
4. models/ : create models for each module to connect to a database
5. repo/ : this repo is logic or query for connect with database
6. services/ : service of module for handle all business logic
7. views/ : make response following requirement

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

1. config/ : to store value or fuction for config of project to use ex. connect db , env key value
2. controllers/ : handlers of application for get request or send response
3. middleware/ : for make permission or error handle
4. models/ : declare model for use
5. services/ : service of module for handle all business logic
