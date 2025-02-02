import React from "react";
import "./button.css";
import { useDispatch } from "react-redux";

const Button = ({ text, payload, handleClick }) => {
  const dispatch = useDispatch();
  return (
    <button className="btn" onClick={() => dispatch(handleClick(payload))}>
      {text}
    </button>
  );
};

export default Button;
