"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedValues = LoginSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid email or password" };
  }

  return {
    success: "Login successful",
  };
};
