"use client";

import { createClient } from "@/lib/supabase/client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

export type LoginData = {
  email: string;
  password: string;
};

const login = async (loginData: LoginData) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword(loginData);

  if (error) {
    throw new Error(error.message);
  }

  return {
    user: data.user,
    session: data.session,
  };
};

export const useAuthLogin = (
  options?: UseMutationOptions<unknown, unknown, LoginData>
) => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (loginData: LoginData) => login(loginData),
    ...options,
  });
};
