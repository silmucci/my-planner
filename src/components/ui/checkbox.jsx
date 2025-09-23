import React from "react";

export function Checkbox({ checked = false, onCheckedChange = () => {}, className = "" }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }} className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        style={{ width: 16, height: 16, accentColor: "black", cursor: "pointer" }}
      />
    </label>
  );
}
