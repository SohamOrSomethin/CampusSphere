export default function Badge({ text }) {
  return (
    <span
      className="
        bg-blue-100
        text-blue-700
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
      "
    >
      {text}
    </span>
  );
}