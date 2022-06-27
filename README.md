
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Prisma](https://www.prisma.io/docs/concepts/overview/what-is-prisma) ORM

## Installation

```bash
$ npm install
```

## Running the app

create .env file and set environment variable. please check .env.example file for reference

```bash
# Before running app, make sure postgres instance is running 
$ npm run dev:db:up

# if you are running app first time application
$ prisma migrate dev #(for dev env). 
$ npx prisma migrate deploy #(for prod env). 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Stay in touch

- Author - [Irfan Ali](https://github.com/Irfanbsse2060)


