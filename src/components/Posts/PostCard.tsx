import { IPost } from "@/type";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-semibold text-rose-700">{post.title}</h2>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}
