import PostCard from "@/components/Posts/PostCard";
import { IPost } from "@/type";

export default async function PostsPage() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=9",
    {
      cache: "no-store",
    }
  );
  const posts = await res.json();

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-rose-700 mb-6">All Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: IPost) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
