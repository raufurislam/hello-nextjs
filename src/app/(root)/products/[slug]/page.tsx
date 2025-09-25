import React, { Suspense } from "react";
import Loading from "../loading";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: `product - ${slug}`,
    description: "this is" + slug + "page",
  };
}

const page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const slug = (await params).slug;
  const searchString = await searchParams;
  console.log("searchString", searchString);

  // throw new Error(`Error while getting product ${slug} data`);
  if (slug == Number(999).toString()) {
    notFound();
  }

  return (
    <div>
      this is {slug} page
      <p>You are currently in {searchString.page} page</p>
      <Suspense fallback={<Loading />}>
        <div>Comments Section</div>
      </Suspense>
    </div>
  );
};

export default page;
