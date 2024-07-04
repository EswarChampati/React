import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load header component with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" });
  expect(loginButton).toBeInTheDocument();
});

it("should render header component with the cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cart = screen.getByText("Cart-0");
  expect(cart).toBeInTheDocument();
});

it("should render header component with the cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartWord = screen.getByText(/Cart/);
  expect(cartWord).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton1 = screen.getByRole("button", { name: "login" });
  fireEvent.click(loginButton1);
  const logoutButton1 = screen.getByRole("button", { name: "logout" });
  fireEvent.click(logoutButton1);
  const loginButton2 = screen.getByRole("button", { name: "login" });

  expect(loginButton2).toBeInTheDocument();
});
