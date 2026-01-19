import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col p-0">
      <div className="p-8 flex justify-end"></div>
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-0 md:gap-24 min-h-0 md:min-h-full px-4">
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center w-full md:w-[500px] bg-gradient-to-br from-blue-900/10 to-blue-800/5 rounded-lg shadow-lg shadow-blue-900/40 p-8 border border-gray-800 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Welcome to Socially!
          </h2>
          <p className="text-gray-300 text-lg">
            An open source social media platform built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-[460px] bg-gray-900 rounded-lg shadow-xl shadow-black/50 p-8 border border-gray-800 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-white text-center">Where do you want to go?</h2>
          <div className="flex flex-col gap-2">
            <Link href="/signup" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
              Sign Up
            </Link>
            <Link href="/login" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

