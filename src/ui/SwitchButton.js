import React from "react";
import PropTypes from "prop-types";

SwitchButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default function SwitchButton({ onClick }) {
  return (
    <button
      className="group absolute bottom-0 p-1 flex transform translate-y-1/2 bg-white border border-grey-300 rounded-full hover:bg-blue-500 hover:border-white focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      <svg
        className="h-3 inline-block stroke-current fill-current text-blue-500 group-hover:text-white"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" strokeWidth="1" fillRule="evenodd">
          <g id="icon-shape">
            <polygon
              id="Combined-Shape"
              points="9 16.1715729 2.92893219 10.1005051 1.51471863 11.5147186 10 20 10.7071068 19.2928932 18.4852814 11.5147186 17.0710678 10.1005051 11 16.1715729 11 0 9 0"
            ></polygon>
          </g>
        </g>
      </svg>
      <svg
        className="h-3 inline-block stroke-current fill-current text-blue-500 group-hover:text-white"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Page-1" strokeWidth="1" fillRule="evenodd">
          <g id="icon-shape">
            <polygon
              id="Combined-Shape"
              points="9 3.82842712 2.92893219 9.89949494 1.51471863 8.48528137 10 0 10.7071068 0.707106781 18.4852814 8.48528137 17.0710678 9.89949494 11 3.82842712 11 20 9 20 9 3.82842712"
            ></polygon>
          </g>
        </g>
      </svg>
    </button>
  );
}
