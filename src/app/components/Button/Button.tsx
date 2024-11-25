type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-bold";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-100",
  };

  return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
}
