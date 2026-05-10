import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary">
              RIVEN
            </Link>
            <p className="text-sm text-text-secondary">
              AI-powered appointment setting for high-ticket sales.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Product</span>
              <Link href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</Link>
              <Link href="#pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Company</span>
              <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">About</Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-text-primary uppercase tracking-wider">Legal</span>
              <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border-subtle text-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} Riven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
