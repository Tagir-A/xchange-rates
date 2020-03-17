import React, { useEffect, useState, useCallback } from "react";

import Input from "./ui/Input";
import Selector from "./ui/Selector";
import SubmitButton from "./ui/SubmitButton";
import Balance from "./ui/Balance";
import Rate from "./ui/Rate";
import { currencyFormatter } from "./utils";
import SwitchButton from "./ui/SwitchButton";

const fallbackRates = {
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

const initialBalance = Object.entries(fallbackRates.rates).reduce(
  (result, entry) => ({
    ...result,
    [entry[0]]: 100
  }),
  {}
);

function prepareValue(value = "") {
  return Number(value.replace(/,/g, ""));
}

function App() {
  const [currencies, setCurrensies] = useState();
  const [sourceCurrency, setSourceCurrency] = useState("EUR");
  const [targetCurrency, setTargetCurrency] = useState("RUB");
  const [sourceAmount, setSourceAmount] = useState(0);
  const [targetAmount, setTargetAmount] = useState(0);
  const [focusedInput, setFocusedInput] = useState("source");
  const [rates, setRates] = useState(fallbackRates.rates);
  const [balance, setBalance] = useState(initialBalance);
  const [isExchangeDisabled, setIsExchangeDisabled] = useState(false);

  useEffect(() => {
    const url = `https://api.exchangeratesapi.io/latest?base=${sourceCurrency}`;
    let timeoutID;
    function fetchRates() {
      fetch(url)
        .then(res =>
          res.json().then(data => {
            const { rates } = data;
            // Fix API error
            if (sourceCurrency === "EUR") rates.EUR = 1;
            const ccodes = Object.keys(rates);
            setCurrensies(ccodes);
            setRates(rates);
            timeoutID = setTimeout(fetchRates, 10000);
          })
        )
        .catch(e => {
          console.warn(e);
        });
    }
    fetchRates();
    return () => {
      clearTimeout(timeoutID);
    };
  }, [sourceCurrency]);

  const onSourceSelect = useCallback(value => {
    setSourceCurrency(value);
  }, []);
  const onTargetSelect = useCallback(value => {
    setTargetCurrency(value);
  }, []);

  const handleSourceChange = useCallback(({ target: { value } }) => {
    const preparedValue = prepareValue(value);
    setSourceAmount(preparedValue);
  }, []);
  const handleTargetChange = useCallback(({ target: { value } }) => {
    const preparedValue = prepareValue(value);
    setTargetAmount(preparedValue);
  }, []);

  const handleSourceFocus = useCallback(value => {
    setFocusedInput("source");
  }, []);
  const handleTargetFocus = useCallback(value => {
    setFocusedInput("target");
  }, []);

  const handleSwitch = useCallback(() => {
    const temp = targetCurrency
    setTargetCurrency(sourceCurrency)
    setSourceCurrency(temp)

  }, [sourceCurrency, targetCurrency]);

  const handleExchange = useCallback(() => {
    const sourceBalance = balance[sourceCurrency];
    const targetBalance = balance[targetCurrency];

    setBalance({
      ...balance,
      [sourceCurrency]: sourceBalance - sourceAmount,
      [targetCurrency]: targetBalance + targetAmount
    });
    setTargetAmount(0);
    setSourceAmount(0);
  }, [balance, sourceAmount, sourceCurrency, targetAmount, targetCurrency]);

  useEffect(() => {
    if (focusedInput !== "source") return;
    const rate = rates[targetCurrency];
    const targetAmount = sourceAmount * rate;
    setTargetAmount(targetAmount);
  }, [targetCurrency, sourceAmount, rates, focusedInput]);

  useEffect(() => {
    if (focusedInput !== "target") return;
    const rate = rates[targetCurrency];
    const sourceAmount = targetAmount / rate;
    setSourceAmount(sourceAmount);
  }, [targetAmount, rates, focusedInput, targetCurrency]);

  useEffect(() => {
    const sourceBalance = balance[sourceCurrency];
    if (
      sourceAmount < 0.1 ||
      sourceAmount > sourceBalance ||
      sourceCurrency === targetCurrency
    ) {
      setIsExchangeDisabled(true);
    } else {
      setIsExchangeDisabled(false);
    }
  }, [balance, sourceAmount, sourceCurrency, targetCurrency]);

  return (
    <div className="App font-sans max-w-lg m-auto">
      <div className="source flex px-2 py-4 relative">
        <div className="mr-2 flex-1">
          <Selector
            options={currencies}
            value={sourceCurrency}
            onSelect={onSourceSelect}
          />
          <Balance
            balance={`Balance: ${currencyFormatter(
              sourceCurrency,
              balance[sourceCurrency]
            )}`}
          />
        </div>
        <Input
          onChange={handleSourceChange}
          onFocus={handleSourceFocus}
          value={sourceAmount}
        />
        <SwitchButton onClick={handleSwitch} />
        <Rate source={sourceCurrency} rate={rates[targetCurrency]} target={targetCurrency} />
      </div>
      <div className="target bg-gray-300 flex px-2 py-4">
        <div className="mr-2 flex-1">
          <Selector
            options={currencies}
            value={targetCurrency}
            onSelect={onTargetSelect}
          />
          <Balance
            balance={`Balance: ${currencyFormatter(
              targetCurrency,
              balance[targetCurrency]
            )}`}
          />
        </div>
        <Input
          className="bg-gray-300"
          onChange={handleTargetChange}
          onFocus={handleTargetFocus}
          value={targetAmount}
        />
      </div>
      <SubmitButton disabled={isExchangeDisabled} onClick={handleExchange} />
    </div>
  );
}

export default App;
