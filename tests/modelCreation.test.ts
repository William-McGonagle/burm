import { expect, describe, it } from "bun:test";
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

    expect(aData.firstname).toBe(bData.firstname);
    expect(aData.lastname).toBe(bData.lastname);
  
  });

  it("should allow for models without type annotations", () => {
    
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

    expect(aData.firstname).toBe(bData.firstname);
    expect(aData.lastname).toBe(bData.lastname);
    
  });
});