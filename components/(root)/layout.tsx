// app/dashboard/layout.tsx
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { userId } = auth()
  
  // If not authenticated, redirect to sign-in
  if (!userId) {
    redirect("/sign-in")
  }
  
  return (
    <div className="dashboard-layout">
      {/* Add your dashboard navigation/sidebar here */}
      <main>{children}</main>
    </div>
  )
}