"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";

export const ContinueWithGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
        errorCallbackURL: "/auth/login?error=google",
        newUserCallbackURL: "/dashboard",
      });
    } catch (error) {
      console.error("Erreur lors de la connexion avec Google:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
    >
      <Image src="/google.svg" alt="Google" width={20} height={20} />
      {isLoading ? "Connexion en cours..." : "Continuer avec Google"}
    </button>
  );
};
