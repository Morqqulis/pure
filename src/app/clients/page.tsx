'use client'

import Error from '@/components/common/Error/Error'
import Loading from '@/components/common/Loading/Loading'
import ClientsForm from '@/components/sections/Clients/ClientsForm/ClientsForm'
import { Button } from '@/components/ui/button'
import CustomDialog from '@/components/ui/CustomDialog'
import PagesHeading from '@/components/ui/PagesHeading'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import ClientsTable from '@/components/sections/Clients/ClientsTable'

export default function ClientsPage() {
  const {
    data: clientsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['clients'],
    queryFn: () => axios.get('/api/clients').then((res) => res.data),
  })

  return (
    <div className={`space-y-6 py-6`}>
      <PagesHeading title="Clients" description={'A list of all clients using RadioCopilot'}>
        <CustomDialog
          title="Add Client"
          description="Add a new client to the table"
          triggerChildren={
            <Button className={`bg-red-700`} variant={'destructive'}>
              Add Client
            </Button>
          }
        >
          <ClientsForm variant={'create'} inModal={true} />
        </CustomDialog>
      </PagesHeading>

      {isLoading && <Loading message={'Loading clients...'} />}
      {isError && <Error message={'Error loading clients'} where={'ClientsPage'} />}

      {Array.isArray(clientsData) && clientsData.length === 0 && (
        <div className="flex justify-center items-center py-5 h-full">
          <p className="text-muted-foreground text-sm">No clients found</p>
        </div>
      )}

      {Array.isArray(clientsData) && clientsData.length > 0 && <ClientsTable clientsData={clientsData} />}
    </div>
  )
}
