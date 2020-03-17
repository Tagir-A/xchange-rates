import React, { useCallback, useMemo } from "react";
import PropTypes from 'prop-types'
import cc from "currency-codes";

const currencyCodesInitial = ["USD", "EUR", "GBP"];

function getOptions(codes = []) {
  return codes.map(code => {
    const currencyMeta = cc.code(code);
    const name = currencyMeta ? `${currencyMeta.currency} (${code})` : code;
    return { code, name: name };
  });
}

Selector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string,),
}

Selector.defaultProps = {
  onSelect: () => {},
  options: currencyCodesInitial
};

function Selector(props) {
  const currencyCodes = props.options;

  const handleSelection = useCallback(
    ({ target: { value } }) => {
      props.onSelect(value);
    },
    [props]
  );

  const options = useMemo(() => getOptions(currencyCodes), [currencyCodes]);

  return (
    <div className="MyMenuButton relative">
      <select
        className="block appearance-none w-full bg-transparent py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
        value={props.value}
        onChange={handleSelection}
        data-testid='selector'
      >
        {options.map((item, i) => {
          return (
            <option key={i} data-testid="currency-pocket" value={item.code}>
              {item.name}
            </option>
          );
        })}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default Selector;
