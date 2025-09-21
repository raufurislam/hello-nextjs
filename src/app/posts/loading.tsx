export default function PostsLoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="mb-6">
        <svg
          className="animate-spin h-12 w-12 text-rose-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
          ></path>
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-rose-700">Loading posts...</h2>
      <p className="mt-2 text-gray-600">Please wait a moment.</p>
    </div>
  );
}
