import { useState } from "react";
import "./switch.scss";

export function Switch({
  onLabel,
  offLabel,
  disabled,
  onChange,
  initialValue,
  backgroundColor,
  foregroundColor,
  textColor
}) {
  let [state, setState] = useState(!!initialValue);
  onLabel = onLabel || 'On';
  offLabel = offLabel || 'Off';
  backgroundColor = backgroundColor || "#303030";
  foregroundColor = foregroundColor || "#6A98F0";
  textColor = textColor || "#FFFFFF";
  let negateState = () => {
    if (!disabled) {
      let newState = !state;
      setState(newState);
      if (onChange) {
        onChange(newState);
      }
    }
  };
  return (
    <div
      className={`switch-container ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor }}
      onClick={() => negateState()}
    >
      <div
        className={`text-container ${state ? "on" : "off"}`}
        style={{ backgroundColor: foregroundColor }}
      >
        <span className="text" style={{ color: textColor }}>{(state ? onLabel : offLabel).toUpperCase()}</span>
      </div>
    </div>
  );
}
