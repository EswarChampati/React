import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { beforeEach, afterEach, beforeAll, afterAll } from "@jest/globals";

describe("contact us page test cases", () => {
  afterEach(() => {
    console.log("after each test case");
  });
  afterAll(() => {
    console.log("after all test cases in Contact.test.js suite");
  });

  beforeEach(() => {
    console.log("before every test case in the ContactUs.test.js suite");
  });
  beforeAll(() => {
    console.log("before all the test cases");
  });

  it("should load contact us component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the contact component", () => {
    render(<ContactUs />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });

  test("should load input name inside the contact component", () => {
    render(<ContactUs />);
    const input = screen.getByPlaceholderText("message");
    expect(input).toBeInTheDocument();
  });

  test("should load 2 inputbox inside the contact component", () => {
    render(<ContactUs />);
    const inputAll = screen.getAllByRole("textbox");
    expect(inputAll.length).toBe(2);
  });
});
