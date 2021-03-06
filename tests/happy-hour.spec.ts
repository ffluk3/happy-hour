import { test } from "./fixtures/wheel-of-names";

test.describe("Happy Hour Wheel Spin", () => {
  test("spins the wheel and returns the result", async ({ browserName, wheelOfNames }) => {
    await wheelOfNames.spinWheel();
    const result = await wheelOfNames.getResult();
    console.log(`Option ${browserName}: ${result}`);
  });
})
