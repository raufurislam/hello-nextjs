export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white px-6 py-3 mt-8">
      <div className="flex items-center justify-between">
        <div className="text-sm">&copy; 2025 NextJS. All rights reserved.</div>

        <div className="flex space-x-6">
          <a href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="/support" className="hover:text-gray-300">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
