# ![Burm](https://raw.githubusercontent.com/William-McGonagle/burm/master/.github/media/cover.svg)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/william-mcgonagle/burm)
![GitHub issues](https://img.shields.io/github/issues/william-mcgonagle/burm)
![GitHub Repo stars](https://img.shields.io/github/stars/william-mcgonagle/burm?color=green)
![GitHub followers](https://img.shields.io/github/followers/william-mcgonagle?color=red)
![GitHub Sponsors](https://img.shields.io/github/sponsors/fairfield-programming?color=orange)
![GitHub top language](https://img.shields.io/github/languages/top/william-mcgonagle/burm?color=purple)

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

```javascript

import Burm, { Datatype, Condition } from "burm";

const User = Burm.register("User", {
    firstname: Datatype.STRING,
    lastname: Datatype.STRING
})

const userData = User.findOne({
    where: Condition.Equals("id", 1)
})

console.log(userData); // Logs the First User Object

```
