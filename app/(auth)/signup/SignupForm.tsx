"use client";

import { useAuthSignup } from "@/hooks";
import { signupSchema, type SignupFormData } from "@/lib/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const router = useRouter();
  const { mutateAsync, isPending } = useAuthSignup({
    onSuccess: () => {
      router.push("/login");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const password = watch("password");

  const onSubmit = async (data: SignupFormData) => {
    try {
      await mutateAsync({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.error("Signup failed:", error);
      setError("root", {
        type: "manual",
        message: error instanceof Error ? error.message : "Signup failed",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errors.root && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
          {errors.root.message}
        </div>
      )}

      {/* Full Name Field */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Full name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            {...register("fullName")}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 ${
              errors.fullName
                ? "border-red-300 dark:border-red-600 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            }`}
            placeholder="John Doe"
          />
        </div>
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </div>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 ${
              errors.email
                ? "border-red-300 dark:border-red-600 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            }`}
            placeholder="john@example.com"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            {...register("password")}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 ${
              errors.password
                ? "border-red-300 dark:border-red-600 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            }`}
            placeholder="Create a strong password"
          />
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.password.message}
          </p>
        )}
        {password && (
          <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
            <p>Password must contain:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li className={password.length >= 6 ? "text-green-600" : ""}>
                At least 6 characters
              </li>
              <li className={/[A-Z]/.test(password) ? "text-green-600" : ""}>
                One uppercase letter
              </li>
              <li className={/[a-z]/.test(password) ? "text-green-600" : ""}>
                One lowercase letter
              </li>
              <li className={/\d/.test(password) ? "text-green-600" : ""}>
                One number
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Confirm password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            {...register("confirmPassword")}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 ${
              errors.confirmPassword
                ? "border-red-300 dark:border-red-600 focus:ring-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
            }`}
            placeholder="Confirm your password"
          />
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start flex-col">
        <div className="flex items-start">
          <input
            id="terms"
            type="checkbox"
            {...register("terms")}
            className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1`}
          />
          <label
            htmlFor="terms"
            className={`ml-2 block text-sm text-gray-700 dark:text-gray-300 ${
              errors.terms ? "text-red-600 dark:text-red-400" : ""
            }`}
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              Privacy Policy
            </a>
          </label>
        </div>
        {errors.terms && (
          <p className=" mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.terms.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {isPending ? (
              <svg
                className="animate-spin h-5 w-5 text-blue-300"
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
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-blue-300 group-hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
          {isPending ? "Creating account..." : "Create account"}
        </button>
      </div>
    </form>
  );
}
