export function Button({ children, variant = "default", size = "default", className = "", ...props }) {
  const variants = {
    default: "bg-black text-white",
    secondary: "bg-gray-200",
    ghost: "bg-transparent",
  };
  const sizes = {
    default: "h-9 px-3 rounded-xl",
    icon: "h-8 w-8 rounded-xl flex items-center justify-center",
  };
  return (
    <button
      className={`${sizes[size]} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
