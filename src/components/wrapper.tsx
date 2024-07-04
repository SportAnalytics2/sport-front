export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`wrapper ${className}`}>{children}</section>;
}
