import React, { useRef } from "react";
import NumberFormat from "react-number-format";

Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  value: 0,
  className: ""
};

export default function Input(props) {
  const input = useRef();
  const onChange = event => {
    props.onChange(event);
  };
  const onFocus = event => {
    setTimeout(() => {
      input.current.select();
    }, 50);
    props.onFocus(event);
  };
  const className = `${props.className} input rtl flex-1`;
  return (
    <NumberFormat
      className={className}
      getInputRef={input}
      allowNegative={false}
      allowLeadingZeros={false}
      allowEmptyFormatting={false}
      decimalScale={2}
      type="tel"
      onChange={onChange}
      onFocus={onFocus}
      value={props.value}
      data-testid="input"
    />
  );
}
