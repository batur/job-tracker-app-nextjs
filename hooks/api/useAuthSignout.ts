"use client";

import { createClient } from "@/lib/supabase/client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

const signout = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const useAuthSignout = (
  options?: UseMutationOptions<unknown, unknown, void>
) => {
  return useMutation({
    mutationKey: ["signout"],
    mutationFn: signout,
    ...options,
  });
};
