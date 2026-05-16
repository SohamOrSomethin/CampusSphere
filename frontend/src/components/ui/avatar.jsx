export default function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="
        w-12
        h-12
        rounded-full
        object-cover
      "
    />
  );
}