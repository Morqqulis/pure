'use client'

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import CustomDialog from '@/components/ui/CustomDialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Client } from '@prisma/client'
import ClientsForm from './ClientsForm/ClientsForm'
import { tableBodyCellClasses, tableHeadClasses, tableHeads } from './client-table.data'

export default function ClientsTable({ clientsData }: { clientsData: Client[] }) {
  return (
    <div className={`mt-8 overflow-hidden rounded-lg bg-card shadow-sm ring-1 ring-border`}>
      <Table className={`divide-y divide-border`}>
        <TableHeader className={`bg-muted`}>
          <TableRow>
            {tableHeads.map((head) => (
              <TableHead key={head.key} className={tableHeadClasses}>
                {head.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className={`divide-y divide-border bg-card`}>
          {clientsData.map((client: Client) => (
            <TableRow key={client.id}>
              <TableCell className={`${tableBodyCellClasses}`}>
                <div className="font-medium text-foreground text-sm">{client.name}</div>
                <div className="text-muted-foreground text-sm">{client.email}</div>
              </TableCell>
              <TableCell className={`tableBodyCellClasses text-sm text-muted-foreground`}>{client.company}</TableCell>
              <TableCell className={`${tableBodyCellClasses}`}>{client.email}</TableCell>
              <TableCell className={`${tableBodyCellClasses}`}>
                <Badge variant={client.status === 'active' ? 'default' : 'destructive'}>{client.status}</Badge>
              </TableCell>
              <TableCell className={`flex items-center gap-2 ${tableBodyCellClasses}`}>
                <CustomDialog
                  title={'Edit Client'}
                  description={'Edit the client details'}
                  triggerChildren={
                    <Button variant={'outline'} size={'icon'}>
                      <PencilIcon className={`h-4 w-4`} />
                    </Button>
                  }
                >
                  <ClientsForm variant={'edit'} inModal={true} initialData={client} />
                </CustomDialog>
                <Button variant={'destructive'} size={'icon'}>
                  <TrashIcon className={`h-4 w-4`} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
