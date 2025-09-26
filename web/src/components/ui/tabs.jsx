import React, { createContext, useContext } from "react";

const TabsCtx = createContext({ value: "", onValueChange: () => {} });

export function Tabs({ value, onValueChange = () => {}, children, className = "" }) {
  return (
    <TabsCtx.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div
      role="tablist"
      className={className}
      style={{ display: "inline-flex", gap: 8, background: "#eee", padding: 4, borderRadius: 12 }}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = "" }) {
  const ctx = useContext(TabsCtx);
  const active = ctx.value === value;
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={() => ctx.onValueChange(value)}
      className={className}
      style={{
        padding: "6px 10px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        background: active ? "black" : "white",
        color: active ? "white" : "black",
      }}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const ctx = useContext(TabsCtx);
  if (ctx.value !== value) return null;
  return <div className={className} style={{ marginTop: 8 }}>{children}</div>;
}
