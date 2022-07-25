# [![Burm](https://raw.githubusercontent.com/William-McGonagle/burm/master/.github/media/cover.svg)](https://william-mcgonagle.github.io/burm)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/william-mcgonagle/burm)
![GitHub issues](https://img.shields.io/github/issues/william-mcgonagle/burm)
![GitHub Repo stars](https://img.shields.io/github/stars/william-mcgonagle/burm?color=green)
![GitHub followers](https://img.shields.io/github/followers/william-mcgonagle?color=red)
![GitHub Sponsors](https://img.shields.io/github/sponsors/fairfield-programming?color=orange)
![GitHub top language](https://img.shields.io/github/languages/top/william-mcgonagle/burm?color=purple)
[![Discord](https://img.shields.io/discord/928056769983447090)](https://discord.gg/qtu2MXGhcf)

Burm is an object relational manager for [Bun](https://bun.sh/), the fastest Javascript Engine. The name is a merge of "Bun" and "ORM", forming "Burm". Pronounce it however you would like, we really don't care. Also, the project is licensed under the MIT license and managed by the Fairfield Programming Association. This means you can do whatever you want with it while still knowing it's not going anywhere.

## Getting Started

To install Bun, run the following code. From there, you can create your own bun project and use Bun or [NPM](https://npmjs.com/) as your package manager.

```bash
curl https://bun.sh/install | bash
```

To download the project from NPM, just use the command below. This will include burm as one of your dependencies (Just a side note, burm doesn't depend on any other packages, because we're just that cool).

```bash
npm i burm
```

Below is some starter code that you can use to get burm included in your project. Burm allows for models to be created at runtime, procedural data generation for testing, and many other cool things you can check out in our documentation.

### Without Types

```javascript

const User = Burm.register("User", {
  firstname: DataType.STRING,
  lastname: DataType.STRING
})

const aData = User.create({
  firstname: "William",
  lastname: "McGonagle"
})

const bData = User.findOne({
  where: Condition.equals(
    "firstname",
    "William"
  )
})

```

### With Types

```typescript

interface UserModel {
  firstname: string;
  lastname: string;
}

const User = Burm.register<UserModel>("User", {
  firstname: DataType.STRING,
  lastname: DataType.STRING
})

const aData = User.create({
  firstname: "William",
  lastname: "McGonagle"
})

const bData = User.findOne({
  where: Condition.equals(
    "firstname",
    "William"
  )
})

```

## Features

Below is a list of features that Burm either currently has or will need in the not-too-distant future. These features are for user-happiness, performance, or long term benefit of the community.

- [X] Defining Models and Doing CRUD Operations
- [ ] Creating Relationships Between Tables
- [ ] Middleware System (Similar to Express)
- [ ] High Code Coverage
- [ ] 100% Typescript Definitions for Typechecking
- [X] Ability to Run Raw Queries
- [ ] Promises/ Async Await
- [ ] Query Pagination

## Agenda and Plan

We want Burm to be the go-to ORM for Bun, but how are we going to do that? Well, let's start by laying out what the agenda is below.

1. Build a modular skeleton of an ORM. This will allow basic CRUD, Middleware, Caching, and some other features.
2. Create database wrappers
    - SQLite
    - postgreSQL
    - SQL
3. Create database packages
    - There is no point in having database wrappers (which are used to generate the queries), if you do not have packages to actually connect to the database and run the queries. That is why for each database wrapper, we will also need a database package.

If you have any pieces that you would like to add to this (very rough) agenda, just put them in a Github issue and send it in. Other people will be able to see it, and hopefully work on the idea.

Also not included in this agenda is a documentation website and landing page. Since it's supported by the Fairfield Programming Association, we are able to host it on the FPA servers and use the FPA domain.
