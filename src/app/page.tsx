import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/auth/login">
        <Button>Login</Button>
      </Link>
      <Link href="/auth/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
}
