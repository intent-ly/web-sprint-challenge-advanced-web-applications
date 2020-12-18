import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { rerender, queryAllByTestId } = render(
    <BubblePage colors={[]} />
  );

  const colorList = queryAllByTestId(/color/i);
  expect(colorList).toHaveLength(0);
  rerender(<BubblePage colors={colorsData} />);

});
