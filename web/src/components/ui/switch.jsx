import React from "react";

export function Switch({ checked = false, onCheckedChange = () => {}, className = "" }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }} className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: 40,
          height: 22,
          borderRadius: 999,
          background: checked ? "#000" : "#ddd",
          position: "relative",
          transition: "background .15s",
          display: "inline-block",
        }}
        aria-checked={checked}
        role="switch"
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: checked ? 20 : 2,
            width: 18,
            height: 18,
            background: "#fff",
            borderRadius: "50%",
            transition: "left .15s",
            boxShadow: "0 1px 2px rgba(0,0,0,.2)",
          }}
        />
      </span>
    </label>
  );
}
