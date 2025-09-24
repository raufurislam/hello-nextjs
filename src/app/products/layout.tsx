export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>Products layout</h2>
      {children}{" "}
    </div>
  );
}
