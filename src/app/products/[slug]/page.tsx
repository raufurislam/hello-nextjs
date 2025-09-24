export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const slug = (await params).slug;
  const searchString = await searchParams;
  console.log({ searchString });

  return (
    <div>
      <h1>This is {slug} page component</h1>
      <p>You are currently in currently in {searchString.page} page</p>
    </div>
  );
}
