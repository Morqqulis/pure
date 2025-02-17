'use client'

import CustomDialog from '@/components/ui/CustomDialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Location, Station } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
import StationsForm from './StationsForm'
import { stationsTableHeads } from './stations.data'

export default function StationsTable({
  locationsData,
  stationsData,
}: {
  locationsData: Location[]
  stationsData: Station[]
}) {
  const queryClient = useQueryClient()

  const handleDeleteStation = useMutation({
    mutationFn: (id: number) => axios.delete(`/api/stations/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stations'] })
      queryClient.invalidateQueries({ queryKey: ['locations'] })
      toast.success('Station deleted successfully')
    },
    onError: () => {
      toast.error('Error deleting station')
    },
  })

  return (
    <div className="bg-card shadow-sm mt-8 ring-border rounded-lg ring-1 overflow-hidden">
      <Table className="divide-y divide-border min-w-full">
        <TableHeader className="bg-muted">
          <TableRow>
            {stationsTableHeads.map((head) => (
              <TableHead
                key={head.key}
                className="px-6 py-3 font-medium text-muted-foreground text-xs text-left uppercase tracking-wider"
              >
                {head.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody className="bg-card divide-y divide-border">
          {stationsData.map((station: Station) => {
            const location = locationsData.find((l: Location) => l.id === station.locationId)
            return (
              <TableRow key={station.id}>
                <TableCell className="px-6 py-4">
                  <div className="font-medium text-foreground text-sm">{station.name}</div>
                  <div className="text-muted-foreground text-sm">{station.id}</div>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{station.website}</TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                  {location ? `${location.city}, ${location.country}` : 'Unknown'}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">{station.website}</TableCell>
                <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                  <Badge variant={station.status === 'active' ? 'default' : 'destructive'}>{station.status}</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-2 px-6 py-4">
                  <CustomDialog
                    className={`max-w-2xl`}
                    title="Edit Station"
                    description="Edit the station details"
                    triggerChildren={
                      <Button variant="ghost" size="icon">
                        <PencilIcon className="w-5 h-5" />
                      </Button>
                    }
                  >
                    <StationsForm variant="edit" inModal={true} initialData={station} />
                  </CustomDialog>
                  <Button variant="destructive" size="icon" onClick={() => handleDeleteStation.mutate(station.id)}>
                    <TrashIcon className="w-5 h-5" />
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
