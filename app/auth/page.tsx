import { AuthForm } from "@/components/auth/auth-form";
import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <Link href="/" className="text-3xl font-bold tracking-tight text-primary">
          RIVEN
        </Link>
      </div>
      <AuthForm />
    </div>
  );
}
