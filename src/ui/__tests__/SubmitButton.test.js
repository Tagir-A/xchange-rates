import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import pretty from "pretty";

import SubmitButton from "../SubmitButton";

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
  const result = render(<SubmitButton />);
  container = result.container;
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<button class=\\"block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed m-auto mt-2\\" data-testid=\\"exchange-btn\\">Exchange</button>"`
  );
});
it("renders with props", () => {
  const mockClick = jest.fn((x) => x)
  const {container, rerender} = render(<SubmitButton title='Submit' disabled={true} onClick={mockClick} />);
  const btn = getByTestId(container, 'exchange-btn')
  expect(btn).toHaveTextContent('Submit')
  expect(btn.hasAttribute('disabled')).toBe(true)
  fireEvent.click(btn)
  expect(mockClick).not.toHaveBeenCalled()
  rerender(<SubmitButton title='Submit' onClick={mockClick} />)
  expect(btn.hasAttribute('disabled')).toBe(false)
  fireEvent.click(btn)
  expect(mockClick).toHaveBeenCalled()
});
