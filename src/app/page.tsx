import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenido a <span className="text-blue-600">TrackCloud</span>
      </h1>
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </Link>
        <Link
          href="/dashboard"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          Ver Demo
        </Link>
      </div>
    </div>
  )
}
