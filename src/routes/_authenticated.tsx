import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import Header from '@/components/Header'
import { auth } from '@/lib/better-auth/auth'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    try {
      const session = await auth.api.getSession()
      if (!session?.user) {
        throw redirect({ to: '/sign-in' })
      }
      return {
        user: {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
        }
      }
    } catch {
      throw redirect({ to: '/sign-in' })
    }
  },
  component: AuthenticatedLayout,
})

function AuthenticatedLayout() {
  const { user } = Route.useLoaderData()
  
  return (
    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      <div className="container py-10">
        <Outlet />
      </div>
    </main>
  )
}