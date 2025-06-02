import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentification",
  description: "Page d'authentification",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="bg-card p-8 rounded-lg border border-border shadow-sm">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
