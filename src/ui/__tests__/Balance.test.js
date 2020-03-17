import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import pretty from "pretty";

import Balance from "../Balance";

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

it("renders", () => {
  const result = render(<Balance />);
  container = result.container;
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<p class=\\"balance text-sm text-gray-500\\" data-testid=\\"balance\\"></p>"`
  );
});

it("renders with balance prop", () => {
  const result = render(<Balance balance={"Balance: €100.00"} />);
  container = result.container;
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<p class=\\"balance text-sm text-gray-500\\" data-testid=\\"balance\\">Balance: €100.00</p>"`
  );
});
