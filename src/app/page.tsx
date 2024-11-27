export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-10">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-semibold">Design System Componentes iOS Lab UP</h1>
        <p className="text-lg">
          Explora los componentes reutilizables creados para las aplicaciones desarrolladas en el laboratorio de iOS de la UP.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/components/button"
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-primary">Botones</h2>
            <p>Explora las variantes de botones utilizados en las aplicaciones.</p>
          </a>
          <a
            href="/components/card"
            className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-primary">Tarjetas</h2>
            <p>Visualiza las tarjetas y su diseño limpio y funcional.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
