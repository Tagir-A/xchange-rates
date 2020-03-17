import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import pretty from "pretty";

import Rate from "../Rate";

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
  const result = render(<Rate source="EUR" target="RUB" rate="80.12345" />);
  container = result.container;
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<span class=\\"rate absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs bg-white rounded-full px-2 border border-gray-300\\" data-testid=\\"rate\\">€1.00 = <span class=\\"bg-transparent text-blue-700 font-semibold rounded\\">RUB&nbsp;80.1235</span></span>"`
  );
});
