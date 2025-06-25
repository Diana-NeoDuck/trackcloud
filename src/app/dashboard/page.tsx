'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/src/lib/supabase.ts'
import { useRouter } from 'next/navigation'
import { FiTruck, FiPackage, FiFileText, FiLogOut } from 'react-icons/fi'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    vehicles: 0,
    deliveries: 0,
    documents: 0
  })
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setUser(user)
        // Datos de ejemplo (en producción usarías consultas reales a Supabase)
        setStats({
          vehicles: 12,
          deliveries: 25,
          documents: 18
        })
      }
    }
    fetchData()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (!user) return <div className="flex items-center justify-center min-h-screen">Cargando...</div>

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200"
            >
              <FiLogOut /> Cerrar Sesión
            </button>
          </div>
        </div>
      </header>
      <main className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            icon={<FiTruck className="w-8 h-8 text-blue-500" />}
            title="Vehículos Activos"
            value={stats.vehicles}
          />
          <StatCard 
            icon={<FiPackage className="w-8 h-8 text-green-500" />}
            title="Entregas Hoy"
            value={stats.deliveries}
          />
          <StatCard 
            icon={<FiFileText className="w-8 h-8 text-orange-500" />}
            title="Documentos"
            value={stats.documents}
          />
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: number }) {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-gray-50">
            {icon}
          </div>
          <div className="ml-5">
            <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
