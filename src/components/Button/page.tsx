import Button from "./Button";

export default function ButtonPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Button Component</h1>
      <div className="space-y-4">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </div>
  );
}
