import React from "react";
import { unmountComponentAtNode } from "react-dom";
import {
  render,
  fireEvent,
  getAllByTestId,
  wait,
  getByTestId
} from "@testing-library/react";
import pretty from "pretty";

import App from "./App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  const fakeRates = {
    rates: {
      CAD: 1.5389,
      EUR: 1,
      HKD: 8.6255,
      ISK: 150.0,
      PHP: 56.453,
      DKK: 7.4732,
      HUF: 338.88,
      CZK: 26.042,
      AUD: 1.7684,
      RON: 4.8213,
      SEK: 10.8453,
      IDR: 16400.61,
      INR: 81.8765,
      BRL: 5.2042,
      RUB: 80.7385,
      HRK: 7.563,
      JPY: 119.11,
      THB: 35.244,
      CHF: 1.0608,
      SGD: 1.5684,
      PLN: 4.357,
      BGN: 1.9558,
      TRY: 6.985,
      CNY: 7.7587,
      NOK: 11.0966,
      NZD: 1.812,
      ZAR: 17.9235,
      USD: 1.1104,
      MXN: 23.7835,
      ILS: 4.0867,
      GBP: 0.8907,
      KRW: 1341.38,
      MYR: 4.7508
    },
    base: "EUR",
    date: "2020-03-13"
  };
  const mockJsonPromise = Promise.resolve(fakeRates);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.useFakeTimers();

it("renders", async () => {
  const result = render(<App />);
  container = result.container;
  await wait(() =>
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"App font-sans max-w-lg m-auto\\">
        <div class=\\"source flex px-2 py-4 relative\\">
          <div class=\\"mr-2 flex-1\\">
            <div class=\\"MyMenuButton relative\\"><select class=\\"block appearance-none w-full bg-transparent py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline\\" data-testid=\\"selector\\">
                <option data-testid=\\"currency-pocket\\" value=\\"CAD\\">Canadian Dollar (CAD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"EUR\\">Euro (EUR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HKD\\">Hong Kong Dollar (HKD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ISK\\">Iceland Krona (ISK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"PHP\\">Philippine Peso (PHP)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"DKK\\">Danish Krone (DKK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HUF\\">Forint (HUF)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CZK\\">Czech Koruna (CZK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"AUD\\">Australian Dollar (AUD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"RON\\">Romanian Leu (RON)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"SEK\\">Swedish Krona (SEK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"IDR\\">Rupiah (IDR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"INR\\">Indian Rupee (INR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"BRL\\">Brazilian Real (BRL)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"RUB\\">Russian Ruble (RUB)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HRK\\">Kuna (HRK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"JPY\\">Yen (JPY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"THB\\">Baht (THB)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CHF\\">Swiss Franc (CHF)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"SGD\\">Singapore Dollar (SGD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"PLN\\">Zloty (PLN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"BGN\\">Bulgarian Lev (BGN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"TRY\\">Turkish Lira (TRY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CNY\\">Yuan Renminbi (CNY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"NOK\\">Norwegian Krone (NOK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"NZD\\">New Zealand Dollar (NZD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ZAR\\">Rand (ZAR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"USD\\">US Dollar (USD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"MXN\\">Mexican Peso (MXN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ILS\\">New Israeli Sheqel (ILS)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"GBP\\">Pound Sterling (GBP)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"KRW\\">Won (KRW)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"MYR\\">Malaysian Ringgit (MYR)</option>
              </select>
              <div class=\\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\\"><svg class=\\"fill-current h-4 w-4\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 20 20\\">
                  <path d=\\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\\"></path>
                </svg></div>
            </div>
            <p class=\\"balance text-sm text-gray-500\\" data-testid=\\"balance\\">Balance: €100.00</p>
          </div><input inputmode=\\"numeric\\" class=\\" input rtl flex-1\\" data-testid=\\"input\\" type=\\"tel\\" value=\\"0\\"><button class=\\"group absolute bottom-0 p-1 flex transform translate-y-1/2 bg-white border border-grey-300 rounded-full hover:bg-blue-500 hover:border-white focus:outline-none focus:shadow-outline\\"><svg class=\\"h-3 inline-block stroke-current fill-current text-blue-500 group-hover:text-white\\" viewBox=\\"0 0 20 20\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\">
              <g id=\\"Page-1\\" stroke-width=\\"1\\" fill-rule=\\"evenodd\\">
                <g id=\\"icon-shape\\">
                  <polygon id=\\"Combined-Shape\\" points=\\"9 16.1715729 2.92893219 10.1005051 1.51471863 11.5147186 10 20 10.7071068 19.2928932 18.4852814 11.5147186 17.0710678 10.1005051 11 16.1715729 11 0 9 0\\"></polygon>
                </g>
              </g>
            </svg><svg class=\\"h-3 inline-block stroke-current fill-current text-blue-500 group-hover:text-white\\" viewBox=\\"0 0 20 20\\" version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\">
              <g id=\\"Page-1\\" stroke-width=\\"1\\" fill-rule=\\"evenodd\\">
                <g id=\\"icon-shape\\">
                  <polygon id=\\"Combined-Shape\\" points=\\"9 3.82842712 2.92893219 9.89949494 1.51471863 8.48528137 10 0 10.7071068 0.707106781 18.4852814 8.48528137 17.0710678 9.89949494 11 3.82842712 11 20 9 20 9 3.82842712\\"></polygon>
                </g>
              </g>
            </svg></button><span class=\\"rate absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs bg-white rounded-full px-2 border border-gray-300\\" data-testid=\\"rate\\">€1.00 = <span class=\\"bg-transparent text-blue-700 font-semibold rounded\\">RUB&nbsp;80.7385</span></span>
        </div>
        <div class=\\"target bg-gray-300 flex px-2 py-4\\">
          <div class=\\"mr-2 flex-1\\">
            <div class=\\"MyMenuButton relative\\"><select class=\\"block appearance-none w-full bg-transparent py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline\\" data-testid=\\"selector\\">
                <option data-testid=\\"currency-pocket\\" value=\\"CAD\\">Canadian Dollar (CAD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"EUR\\">Euro (EUR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HKD\\">Hong Kong Dollar (HKD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ISK\\">Iceland Krona (ISK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"PHP\\">Philippine Peso (PHP)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"DKK\\">Danish Krone (DKK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HUF\\">Forint (HUF)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CZK\\">Czech Koruna (CZK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"AUD\\">Australian Dollar (AUD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"RON\\">Romanian Leu (RON)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"SEK\\">Swedish Krona (SEK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"IDR\\">Rupiah (IDR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"INR\\">Indian Rupee (INR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"BRL\\">Brazilian Real (BRL)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"RUB\\">Russian Ruble (RUB)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"HRK\\">Kuna (HRK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"JPY\\">Yen (JPY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"THB\\">Baht (THB)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CHF\\">Swiss Franc (CHF)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"SGD\\">Singapore Dollar (SGD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"PLN\\">Zloty (PLN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"BGN\\">Bulgarian Lev (BGN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"TRY\\">Turkish Lira (TRY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"CNY\\">Yuan Renminbi (CNY)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"NOK\\">Norwegian Krone (NOK)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"NZD\\">New Zealand Dollar (NZD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ZAR\\">Rand (ZAR)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"USD\\">US Dollar (USD)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"MXN\\">Mexican Peso (MXN)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"ILS\\">New Israeli Sheqel (ILS)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"GBP\\">Pound Sterling (GBP)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"KRW\\">Won (KRW)</option>
                <option data-testid=\\"currency-pocket\\" value=\\"MYR\\">Malaysian Ringgit (MYR)</option>
              </select>
              <div class=\\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\\"><svg class=\\"fill-current h-4 w-4\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 20 20\\">
                  <path d=\\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\\"></path>
                </svg></div>
            </div>
            <p class=\\"balance text-sm text-gray-500\\" data-testid=\\"balance\\">Balance: RUB&nbsp;100.00</p>
          </div><input inputmode=\\"numeric\\" class=\\"bg-gray-300 input rtl flex-1\\" data-testid=\\"input\\" type=\\"tel\\" value=\\"0\\">
        </div><button class=\\"block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed m-auto mt-2\\" data-testid=\\"exchange-btn\\" disabled=\\"\\">Exchange</button>
      </div>"
    `)
  );
});

it("fetches rates every 10 seconds", async () => {
  render(<App />);
  await wait(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  jest.advanceTimersByTime(10000);
  await wait(() => expect(global.fetch).toHaveBeenCalledTimes(2));
});

it("renders with two inputs", async () => {
  const result = render(<App />);
  container = result.container;
  const inputs = getAllByTestId(container, "input");
  await wait(() => expect(inputs.length).toBe(2));
});

it("renders with two balances", async () => {
  const result = render(<App />);
  container = result.container;
  const balances = getAllByTestId(container, "balance");
  await wait(() => expect(balances.length).toBe(2));
});

it("renders with exchange rate and exchange rate shows current rate", async () => {
  const result = render(<App />);
  container = result.container;
  const rate = getByTestId(container, "rate");
  await wait(() =>
    expect(rate).toMatchInlineSnapshot(`
      <span
        class="rate absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-xs bg-white rounded-full px-2 border border-gray-300"
        data-testid="rate"
      >
        €1.00
         = 
        <span
          class="bg-transparent text-blue-700 font-semibold rounded"
        >
          RUB 80.7385
        </span>
      </span>
    `)
  );
  const sourceSelector = getAllByTestId(container, "selector")[0];
  fireEvent.change(sourceSelector, { target: { value: "CZK" } });
  await wait(() => expect(rate).toHaveTextContent("CZK 1.00"));
});

it("renders with at least three pockets", async () => {
  const result = render(<App />);
  container = result.container;
  fireEvent.click(getAllByTestId(container, "selector")[0]);
  const pockets = getAllByTestId(container, "currency-pocket");
  await wait(() => expect(pockets.length).toBeGreaterThanOrEqual(3));
});

it("is possible to exchange and amounts are added to balance", async () => {
  const result = render(<App />);
  container = result.container;
  const sourceInput = getAllByTestId(container, "input")[0];
  fireEvent.change(sourceInput, { target: { value: "23" } });
  const exchangeButton = getByTestId(container, "exchange-btn");
  fireEvent.click(exchangeButton);
  const sourceBalance = getAllByTestId(container, "balance")[0];
  const targetBalance = getAllByTestId(container, "balance")[1];
  await wait(() => expect(sourceBalance).toHaveTextContent("Balance: €77.00"));
  await wait(() =>
    expect(targetBalance).toHaveTextContent("Balance: RUB 1,956.99")
  );
});

it("is impossible to exchange if sourceAmount is less than 0.1 ", async () => {
  const result = render(<App />);
  container = result.container;
  const sourceInput = getAllByTestId(container, "input")[0];
  fireEvent.change(sourceInput, { target: { value: "0.01" } });
  const exchangeButton = getByTestId(container, "exchange-btn");

  await wait(() => expect(exchangeButton.hasAttribute("disabled")).toBe(true));
});
