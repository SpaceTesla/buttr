import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="mb-4 text-4xl font-bold">Page Not Found</h2>
      <p className="mb-8 text-lg text-muted-foreground">
        We couldn't find the page you were looking for.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  );
}
