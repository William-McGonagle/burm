# ![Burm](https://raw.githubusercontent.com/William-McGonagle/burm/d570084e5f2105444466b218af9c72628dea82cb/.github/media/cover.svg)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/william-mcgonagle/burm)
![GitHub issues](https://img.shields.io/github/issues/william-mcgonagle/burm)
![GitHub Repo stars](https://img.shields.io/github/stars/william-mcgonagle/burm?color=green)
![GitHub followers](https://img.shields.io/github/followers/william-mcgonagle?color=red)
![GitHub Sponsors](https://img.shields.io/github/sponsors/fairfield-programming?color=orange)
![GitHub top language](https://img.shields.io/github/languages/top/william-mcgonagle/burm?color=purple)

## About

## API

```javascript

import Burm, { Datatype, Condition } from "burm";

const User = Burm.register("User", {
    firstname: Datatype.STRING,
    lastname: Datatype.STRING
})

const userData = User.findOne({
    where: Condition.Equals("id", 1)
})

console.log(userData);

```
