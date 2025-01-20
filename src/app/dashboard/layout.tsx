import DashboardMain from "@/components/DashboardMain";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <DashboardMain />

            <div className="flex overflow-auto">

                <Sidebar />
                {children}
            </div>
        </div>
       

    );
  }