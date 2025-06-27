import SignupForm from "./SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl text-white">🚀</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get started
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Create your account and start tracking your job applications today
        </p>
      </div>

      {/* Form */}
      <div className="bg-white dark:bg-gray-800 py-8 px-6 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
        <SignupForm />
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
