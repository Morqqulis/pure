'use client'
import { SignalIcon } from '@heroicons/react/24/outline'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { mockUsageData } from '../dashboard.data'

export default function BroadCastsChart() {
  return (
    <div className="bg-card shadow-sm p-6 border border-border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-foreground text-lg">Weekly Broadcasts</h2>
        <SignalIcon className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockUsageData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              }}
            />
            <Bar dataKey="broadcasts" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
