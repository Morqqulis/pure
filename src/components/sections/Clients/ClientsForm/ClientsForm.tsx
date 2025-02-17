'use client'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { IFormProps } from '@/shared/interfaces/shared.types'
import { Client } from '@prisma/client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { clientFormDefaultValues, clientFormFields } from './client-form.data'
import { ClientFormSchema } from './clients.schema'

export default function ClientsForm({ variant = 'create', inModal = false, initialData }: IFormProps<Client>) {
  const queryClient = useQueryClient()
  const form = useForm<ClientFormSchema>({
    defaultValues: initialData ? initialData : clientFormDefaultValues,
  })

  const createClient = useMutation({
    mutationFn: async (data: ClientFormSchema) => {
      return await axios.post('/api/clients', data).then((res) => res.data)
    },
    onSuccess: () => {
      toast.success('Client created successfully')
      queryClient.invalidateQueries({ queryKey: ['clients'] })
    },
    onError: () => {
      toast.error('Failed to create client')
    },
  })

  const updateClient = useMutation({
    mutationFn: async (data: ClientFormSchema) => {
      const res = await axios.put(`/api/clients/${data.id}`, data).then((res) => res.data)
      console.log(res)
      return res
    },
    onSuccess: () => {
      toast.success('Client updated successfully')
      queryClient.invalidateQueries({ queryKey: ['clients'] })
    },
    onError: () => {
      toast.error('Failed to update client')
    },
  })

  const handleSubmit = (data: ClientFormSchema) => {
    if (variant === 'create') {
      createClient.mutate(data)
    } else {
      updateClient.mutate(data)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`space-y-6 rounded-lg border border-gray-700 bg-[#1a1a1a] p-6`}
      >
        <div className={`grid gap-6`}>
          {clientFormFields.map((formField) => (
            <FormField
              key={formField.name}
              control={form.control}
              name={formField.name as keyof ClientFormSchema}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {formField.label} {formField.required && <span className={`text-red-500`}>*</span>}
                  </FormLabel>
                  <FormControl>
                    {formField.type !== 'select' && (
                      <Input
                        {...field}
                        value={field.value?.toString() ?? ''}
                        placeholder={formField.placeholder}
                        type={formField.type}
                      />
                    )}
                  </FormControl>
                  {formField.type === 'select' && (
                    <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                      <SelectTrigger className={`capitalize`}>
                        <SelectValue placeholder={formField.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {formField.options?.map((option) => (
                          <SelectItem className={`capitalize`} key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </FormItem>
              )}
            />
          ))}
        </div>

        {inModal ? (
          <div className="flex justify-end items-center gap-4">
            <DialogClose asChild>
              <Button variant={'outline'} type={'button'}>
                Cancel
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                className={`bg-red-700`}
                type="submit"
                variant={'destructive'}
                disabled={createClient.isPending || updateClient.isPending}
              >
                {variant === 'create' ? 'Create Client' : 'Update Client'}
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-4">
            <Button variant={'outline'} type={'button'}>
              Cancel
            </Button>
            <Button type="submit" disabled={createClient.isPending || updateClient.isPending}>
              {variant === 'create' ? 'Create Client' : 'Update Client'}
            </Button>
          </div>
        )}
      </form>
    </Form>
  )
}
