import { describe, it } from "bun:test";
import Burm, { Condition, DataType } from "../src";

describe("Setting Up Models", () => {
  it("should allow for models with type annotations", () => {
    
    interface UserModel {
      firstname: string;
      lastname: string;
    }

    const User = Burm.register<UserModel>("User", {
      firstname: DataType.STRING,
      lastname: DataType.STRING
    })

    const userData = User.create({
      firstname: "William",
      lastname: "McGonagle"
    })

  });

  it("should allow for models without type annotations", () => {
    
    const User = Burm.register("User", {
      firstname: DataType.STRING,
      lastname: DataType.STRING
    })

    const userData = User.create({
      firstname: "William",
      lastname: "McGonagle"
    })

  });
});