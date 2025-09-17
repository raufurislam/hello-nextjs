export default async function CatchALLRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  console.log(await params);
  return (
    <div>
      <h1>Catch ALL Route</h1>
    </div>
  );
}
