import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, getAllByTestId } from "@testing-library/react";
import pretty from "pretty";

import Selector from "../Selector";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with initial pockets", () => {
  const result = render(<Selector />);
  container = result.container;
  const pockets = getAllByTestId(container, 'currency-pocket')
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"MyMenuButton relative\\"><select class=\\"block appearance-none w-full bg-transparent py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline\\" data-testid=\\"selector\\">
        <option data-testid=\\"currency-pocket\\" value=\\"USD\\">US Dollar (USD)</option>
        <option data-testid=\\"currency-pocket\\" value=\\"EUR\\">Euro (EUR)</option>
        <option data-testid=\\"currency-pocket\\" value=\\"GBP\\">Pound Sterling (GBP)</option>
      </select>
      <div class=\\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\\"><svg class=\\"fill-current h-4 w-4\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 20 20\\">
          <path d=\\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\\"></path>
        </svg></div>
    </div>"
  `);
  expect(pockets.length).toBe(3)
});

it("renders with passed options", () => {
  const result = render(<Selector options={['RUB', 'USD']} />);
  container = result.container;
  const pockets = getAllByTestId(container, 'currency-pocket')
  expect(pockets.length).toBe(2)
});
