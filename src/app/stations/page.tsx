'use client'
import Error from '@/components/common/Error/Error'
import Loading from '@/components/common/Loading/Loading'
import StationsForm from '@/components/sections/Stations/StationsForm'
import StationsTable from '@/components/sections/Stations/StationsTable'
import { Button } from '@/components/ui/button'
import CustomDialog from '@/components/ui/CustomDialog'
import PagesHeading from '@/components/ui/PagesHeading'
import { useQueries, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

export default function StationsPage() {
  const queryClient = useQueryClient()
  const [
    { data: locationsData, isLoading: locationsLoading, error: locationsError },
    { data: stationsData, isLoading: stationsLoading, error: stationsError },
  ] = useQueries({
    queries: [
      { queryKey: ['locations'], queryFn: async () => await axios.get('/api/locations').then((res) => res.data) },
      { queryKey: ['stations'], queryFn: async () => await axios.get('/api/stations').then((res) => res.data) },
    ],
  })

  queryClient.prefetchQuery({ queryKey: ['locations'] })
  queryClient.prefetchQuery({ queryKey: ['stations'] })

  return (
    <section className={`space-y-6 py-6`}>
      <PagesHeading title="Stations" description="A list of all radio stations using RadioCopilot">
        <CustomDialog
          className={`max-w-2xl`}
          title="Add Station"
          description="Add a new station to the table"
          triggerChildren={
            <Button className={`bg-red-700`} variant={'destructive'}>
              Add Station
            </Button>
          }
        >
          <StationsForm variant={'create'} inModal={true} />
        </CustomDialog>
      </PagesHeading>

      {locationsLoading || (stationsLoading && <Loading message="Loading stations..." />)}
      {locationsError ||
        (stationsError && <Error where="StationsPage" message="Error loading stations or locations" />)}

      {locationsData && stationsData && <StationsTable locationsData={locationsData} stationsData={stationsData} />}
    </section>
  )
}
