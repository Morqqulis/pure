'use client'

import { ChartBarIcon } from '@heroicons/react/24/outline'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { COLORS, mockVoiceUsage } from '../dashboard.data'

export default function VoiceUsageChart() {
  return (
    <div className="bg-card shadow-sm p-6 border border-border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-foreground text-lg">Voice Usage by Type</h2>
        <ChartBarIcon className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={mockVoiceUsage} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {mockVoiceUsage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--foreground))',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex justify-center space-x-6">
          {mockVoiceUsage.map((entry, index) => (
            <div key={entry.name} className="flex items-center">
              <div className="mr-2 rounded-full w-3 h-3" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span className="text-muted-foreground text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
