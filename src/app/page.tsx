import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Design System</h1>
      <p className="mb-4">
        Explore the reusable components and design tokens for consistent interfaces.
      </p>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <Link href="/components/button" className="text-blue-600 hover:underline">
            Button Component
          </Link>
        </li>
        <li>
          <Link href="/components/card" className="text-blue-600 hover:underline">
            Card Component
          </Link>
        </li>
        <li>
          <Link href="/tokens/colors" className="text-blue-600 hover:underline">
            Colors
          </Link>
        </li>
        <li>
          <Link href="/tokens/typography" className="text-blue-600 hover:underline">
            Typography
          </Link>
        </li>
      </ul>
    </div>
  );
}
