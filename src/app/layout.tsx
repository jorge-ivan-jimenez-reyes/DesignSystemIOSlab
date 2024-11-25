import "../styles/globals.css";

export const metadata = {
  title: "Design System",
  description: "A web-based design system using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
