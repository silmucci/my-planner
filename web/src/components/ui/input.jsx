export default function Input(props) {
  const { className = "", ...rest } = props;
  return <input className={`h-9 px-3 rounded-xl border w-full ${className}`} {...rest} />;
}

