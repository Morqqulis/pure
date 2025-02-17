import { RadioIcon } from '@heroicons/react/24/outline'

export default function ActivityChart() {
  return (
    <div className="bg-card shadow-sm p-6 border border-border rounded-xl">
      <h2 className="mb-4 font-medium text-foreground text-lg">Recent Activity</h2>
      <div className="flow-root">
        <ul className="-mb-8">
          {[
            { event: 'New broadcast completed', station: 'Radio NYC', time: '5 minutes ago' },
            { event: 'Voice updated', station: 'London FM', time: '2 hours ago' },
            { event: 'New client added', station: 'Berlin Radio', time: '4 hours ago' },
          ].map((activity, activityIdx) => (
            <li key={activityIdx}>
              <div className="relative pb-8">
                {activityIdx !== 2 ? (
                  <span className="top-4 left-4 absolute -ml-px bg-border w-0.5 h-full" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="flex justify-center items-center bg-primary rounded-xl w-8 h-8">
                      <RadioIcon className="w-4 h-4 text-primary-foreground" />
                    </span>
                  </div>
                  <div className="flex flex-1 justify-between space-x-4 pt-1.5 min-w-0">
                    <div>
                      <p className="text-muted-foreground text-sm">
                        {activity.event} <span className="font-medium text-foreground">{activity.station}</span>
                      </p>
                    </div>
                    <div className="text-muted-foreground text-sm whitespace-nowrap">{activity.time}</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
