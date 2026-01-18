import Image from "next/image";

export default function Home() {
  // Imagine your return as a moving box, and everything you want to show needs to fit inside one big box (parent element)!
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-8">
       <div className="bg-gray-900 rounded-lg shadow-xl shadow-black/50 p-8 max-w-md w-full border border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Welcome to Socially!
          </h1>
        <p className="text-gray-300 mb-6 text-center">
          An open source social media platform built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
  );
}
