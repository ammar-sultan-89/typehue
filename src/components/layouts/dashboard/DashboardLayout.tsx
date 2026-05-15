import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { StatsRow } from "./components/StatsRow";
import { Charts } from "./components/Charts";
import { RecentExportsTable } from "./components/RecentExportsTable";
import { ActivityFeed } from "./components/ActivityFeed";
import { AlertsPanel } from "./components/AlertsPanel";
import { TypographyShowcase } from "./components/TypographyShowcase";

export default function DashboardLayout() {

  return (
    <>
    
    <div className="min-h-screen bg-bg text-text">
      {/* Sidebar - Fixed */}
      <Sidebar />

      {/* Main Content Area */}
      <div className={`transition-all duration-300 lg:ps-64 flex flex-col min-h-screen bg-surface`}>
        {/* TopBar - Sticky */}
        <TopBar />

        {/* Dashboard Content */}
        <main className="flex-1 p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* Top Row: Stats */}
          <StatsRow />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {/* Charts */}
                {/* <BarChartX />
                <LineChartX />
                <PieChartX /> */}
                <Charts />
                
            </div>
            {/* Left/Main Column (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Data Table */}
              <RecentExportsTable />

              {/* Typography Showcase */}
              <TypographyShowcase />
            </div>

            {/* Right Sidebar (1/3 width on large screens) */}
            <div className="space-y-8 flex flex-col">
              {/* Alerts Panel */}
              <AlertsPanel />

              {/* Activity Feed */}
              <ActivityFeed />

            </div>
          </div>
          
          {/* Footer spacer */}
          <div className="h-10" />
        </main>
      </div>
    </div>
    </>
  );
}
