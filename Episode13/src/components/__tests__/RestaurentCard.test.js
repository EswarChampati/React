import { render, screen } from "@testing-library/react";
import RestaurentCard from "../Restaurentcard";
import MOCK_DATA from "../mocks/resDataMock.json";
import "@testing-library/jest-dom";

it("should render restaurentCard component with the props", () => {
  render(<RestaurentCard data={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
