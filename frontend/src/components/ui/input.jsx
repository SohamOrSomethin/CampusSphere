export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-2
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />
  );
}