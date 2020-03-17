import React from "react";
import {  unmountComponentAtNode } from "react-dom";
import {
  render,
  fireEvent,
  getAllByTestId
} from "@testing-library/react";
import pretty from "pretty";

import Input from "../Input";

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

it("renders ", () => {
  const result = render(<Input />);
  container = result.container;
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<input inputmode=\\"numeric\\" class=\\" input rtl flex-1\\" data-testid=\\"input\\" type=\\"tel\\" value=\\"0\\">"`
  );
});

it("allows only two digits after dot ", () => {
  const result = render(<Input />);
  container = result.container;
  const sourceInput = getAllByTestId(container, "input")[0];

  fireEvent.change(sourceInput, { target: { value: 10.12 } });
  expect(sourceInput.value).toBe('10.12')
  fireEvent.change(sourceInput, { target: { value: 10.123 } });
  expect(sourceInput.value).toBe('10.12')
});
