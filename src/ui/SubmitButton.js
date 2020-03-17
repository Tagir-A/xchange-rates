import React from "react";
import PropTypes from 'prop-types'


SubmitButton.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

SubmitButton.defaultProps = {
  title: "Exchange",
  disabled: false,
  onClick: () => {}
};

export default function SubmitButton({ title, disabled, onClick }) {
  return (
    <button
      className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed m-auto mt-2"
      onClick={onClick}
      disabled={disabled}
      data-testid='exchange-btn'
    >
      {title}
    </button>
  );
}
