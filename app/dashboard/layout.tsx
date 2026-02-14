import { Suspense } from "react"
import { Header } from "@/components/header"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SheetProvider } from "@/provider/sheet-provider"

type Props = {
  children: React.ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="px-3 lg:px-14">
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </div>
      </SidebarInset>
      <SheetProvider />
    </SidebarProvider>
  )
}

export default DashboardLayout
