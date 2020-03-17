import React from "react";
import PropTypes from 'prop-types'

Balance.defaultProps = {
  balance: PropTypes.string,
};
Balance.defaultProps = {
  balance: ""
};

export default function Balance({ balance }) {
  return (
    <p className="balance text-sm text-gray-500" data-testid="balance">
      {balance}
    </p>
  );
}
