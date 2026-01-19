import Image from "next/image";
import Link from "next/link";

export default function Footer() {
return (
<footer className="mt-auto py-12 border-t border-gray-800 bg-gray-900 relative">
  <div className="max-w-6xl mx-auto px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
      {/* Left column */}
      <div>
        <h3 className="text-white font-semibold mb-4">Socially</h3>
        <p className="text-gray-400 text-sm mb-4">
          An open source social media platform built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
      {/* Right column */}
      <div>
        <h3 className="text-white font-semibold mb-4">Links</h3>
        <div className="flex flex-col space-y-2">
          <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    {/* Copyright */}
    <div className="border-t border-gray-800 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Socially. Open Source (MIT Licensed).
      </p>
    </div>
  </div>
  {/* Badge - positioned in bottom left corner */}
  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-900/40 to-blue-800/40 border-2 border-blue-600/60 rounded-lg shadow-lg backdrop-blur-sm text-blue-200 text-sm font-semibold">
      <span>Made in Michigan💙</span>
    </div>
  </div>
</footer>
 );
}