"use client";
import { Button } from "@/features/shared/components/ui/button";
import { Slot } from "@/features/shared/components/ui/slot";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LogoutButtonProps {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

const LogoutButton = ({ asChild, children, className }: LogoutButtonProps) => {
  const router = useRouter();

  const logout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  const Comp = asChild ? Slot : Button;

  return (
    <Comp onClick={logout} className={className}>
      {children}
    </Comp>
  );
};

export default LogoutButton;
