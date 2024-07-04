import { act, fireEvent } from "@testing-library/react";
import RestaurentMenu from "../RestaurentMenu";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restuarent menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionheader = screen.getByText("McBreakfast (19)");
  fireEvent.click(accordionheader);
  expect(screen.getAllByTestId("foodItems").length).toBe(19);

  expect(screen.getByText("Cart-0")).toBeInTheDocument();
  const addbtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart-1")).toBeInTheDocument();
  fireEvent.click(addbtns[1]);
  expect(screen.getByText("Cart-2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(21);
  fireEvent.click(screen.getByRole("button", { name: "Clear items" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(19);
  expect(screen.getByText("Cart-0")).toBeInTheDocument();
});
