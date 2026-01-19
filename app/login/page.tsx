import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  // Imagine the login page as the welcome mat at the front door of your digital house!

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-8">
      <div className="bg-gray-900 rounded-lg shadow-xl shadow-black/50 p-8 max-w-md w-full border border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-8">Sign in to your account</p>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@example.com"
              required
              />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700/70 hover:bg-blue-700/90 text-white font-semibold py-3 rounded-lg transition duration-150">
            Login
          </button>
          <div className="mt-1 text-center font-bold text-sm">
          <Link href="/signup">Don&apos;t have an account? Click here!</Link>
          </div>
        </form>
      </div>
    </div>
  );
}