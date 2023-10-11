export function Heading1({ className, children }) {
  return (
    <h1 className={`text-3xl font-bold underline ${className}`}>{children}</h1>
  );
}
