import React from "react";
import "./Button.css";

const SIZES = ["sm", "md", "lg"];
const VARIANTS = ["default", "outline", "text"];
const COLORS = ["default", "primary", "secondary", "danger"];

function Button({
  label,
  variant,
  disableShadow,
  disabled,
  size,
  color,
  startIcon,
  endIcon,
}) {
  const setSize = SIZES.includes(size) ? " btn-" + size : "";
  const setVariant = VARIANTS.includes(variant) ? " btn-" + variant : "";
  const setDisabled = disabled ? " disabled" : "";
  const setDisabledShadow = disableShadow ? " btn-shadowless" : "";
  const setColor = COLORS.includes(color) ? " btn-" + color : "";
  const setStartIcon = startIcon ? (
    <span className="material-icons start-icon">{startIcon}</span>
  ) : (
    ""
  );
  const setEndIcon = endIcon ? (
    <span className="material-icons end-icon">{endIcon}</span>
  ) : (
    ""
  );
  return (
    <button
      className={`btn${setSize}${setVariant}${setDisabledShadow}${setColor}`}
      disabled={setDisabled}
    >
      {setStartIcon}
      {label}
      {setEndIcon}
    </button>
  );
}

export default Button;
