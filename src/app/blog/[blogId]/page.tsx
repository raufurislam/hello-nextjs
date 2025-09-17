export default async function DynamicBlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  console.log(await params);

  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-4xl">Dynamic Blog page. BlogId: {blogId}</h1>
    </div>
  );
}
