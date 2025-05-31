import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentification",
  description: "Page d'authentification",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
