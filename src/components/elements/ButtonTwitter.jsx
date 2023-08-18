import React from "react";
import "./ButtonTwitter.css";

export const ButtonTwitter = ({
  children,
  text = "Crear cuenta",
  styleButton = "",
}) => {
  return (
    <button className={`tw-loginpage-button ${styleButton}`}>
      {children}
      {text}
    </button>
  );
};
