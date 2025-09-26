export function Card({ className = "", style, children }) {
  return <div className={`rounded-2xl border ${className}`} style={style}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
