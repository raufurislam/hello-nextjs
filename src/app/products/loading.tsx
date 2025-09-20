export default function ProductsLoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="mb-4">
          <svg
            className="animate-spin h-16 w-16 text-blue-600 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
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
        <h2 className="text-2xl font-semibold text-gray-700">
          We&apos;re fetching your products...
        </h2>
        <p className="text-gray-500">Hang tight, this won&apos;t take long.</p>
      </div>
    </div>
  );
}
