export function Textarea({ className = "", ...props }) {
  return <textarea className={`rounded-xl border w-full p-3 ${className}`} {...props} />;
}
