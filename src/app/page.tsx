import ActivityChart from '@/components/sections/Dashboard/dashboard-charts/ActivityChart'
import BroadCastsChart from '@/components/sections/Dashboard/dashboard-charts/BroadCastsChart'
import VoiceUsageChart from '@/components/sections/Dashboard/dashboard-charts/VoiceUsageChart'
import DashboardStats from '@/components/sections/Dashboard/DashboardStats'
import TimeDisplay from '@/components/sections/Dashboard/TimeDisplay'

export default function HomePage() {
  return (
    <div className={`space-y-6 py-6`}>
      <div className={`flex items-center justify-between gap-2`}>
        <h1 className={`text-2xl font-semibold capitalize text-foreground`}>Dashboard</h1>
        <TimeDisplay />
      </div>

      <DashboardStats />
      <div className={`grid grid-cols-1 gap-5 lg:grid-cols-2`}>
        <BroadCastsChart />
        <VoiceUsageChart />
      </div>
      <ActivityChart />
    </div>
  )
}
