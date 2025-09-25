import { Suspense } from "react";
import Loading from "../loading";
import { error } from "console";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return {
    title: `Product - ${slug}`,
    description: `This is ${slug} pages`,
  };
}

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
  throw new Error(`Error while getting product from ${slug} data`);

  return (
    <div>
      <h1>This is {slug} page component</h1>
      <p>You are currently in currently in {searchString.page} page</p>

      <Suspense fallback={<Loading />}>
        <div>Comments Section</div>
      </Suspense>
    </div>
  );
}
