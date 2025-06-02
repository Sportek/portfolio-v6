"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { unauthorized } from "next/navigation";

/**
 * Sign in a user
 * @param email - The email of the user
 * @param password - The password of the user
 */
export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

/**
 * Sign up a new user
 * @param name - The name of the user
 * @param email - The email of the user
 * @param password - The password of the user
 */
export const signUp = async (name: string, email: string, password: string) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

/**
 * Get the logged in user
 * @returns The logged in user
 */
export const getLoggedInUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) return unauthorized();

  return user;
};
