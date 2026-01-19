import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  // Imagine the login page as the welcome mat at the front door of your digital house!

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-8">
      <div className="bg-gray-900 rounded-lg shadow-xl shadow-black/50 p-8 max-w-md w-full border border-gray-800">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Ready to join the conversation?
        </h1>
        <p className="text-gray-400 text-center mb-8">Create an account to get started!</p>
        
        {/* Signup Form */}
        <form className="space-y-4">
        {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md  focus:border-blue-500 focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-300 mb-2">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md  focus:border-blue-500 focus:outline-none"
              placeholder="RavynGG"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md  focus:border-blue-500 focus:outline-none"
              placeholder="********"
              required
            />
          </div>
          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm text-gray-300 mb-2">
              Confirm Password
            </label>
            <input
              name="confirm-password"
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:border-blue-500 focus:outline-none"
              placeholder="********"
              required
            />
          </div>
          {/* Submit Button */}     
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
            Submit
          </button>
          <div className="mt-1 text-center font-bold text-sm">
          <Link href="/login">Already have an account? Click here!</Link>
          </div>
        </form>
      </div>
    </div>
  );  
}  