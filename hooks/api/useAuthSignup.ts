"use client";

import { createClient } from "@/lib/supabase/client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export type SignupData = {
  email: string;
  password: string;
  fullName?: string;
};

const signup = async (signupData: SignupData) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: signupData.email,
    password: signupData.password,
    options: {
      data: {
        full_name: signupData.fullName,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user,
    session: data.session,
  };
};

export const useAuthSignup = (
  options?: UseMutationOptions<unknown, unknown, SignupData>
) => {
  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (signupData: SignupData) => signup(signupData),
    ...options,
  });
};
