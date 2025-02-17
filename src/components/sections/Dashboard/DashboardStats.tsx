import { dashboardStats } from './dashboard.data'

export default function DashboardStats() {
  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {dashboardStats.map((stat) => (
        <div key={stat.name} className="stats-card">
          <dt>
            <div className={`absolute rounded-xl p-3 ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="ml-16 font-medium text-muted-foreground text-sm truncate">{stat.name}</p>
          </dt>
          <dd className="flex items-baseline ml-16">
            <p className="font-semibold text-foreground text-2xl">{stat.value}</p>
            <p className="ml-2 text-muted-foreground text-sm">of {stat.total}</p>
          </dd>
        </div>
      ))}
    </div>
  )
}
