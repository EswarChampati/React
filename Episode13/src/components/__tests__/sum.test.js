import { sum } from "../sum";
test("sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //below line is called the asertion
  expect(result).toBe(7);
});
