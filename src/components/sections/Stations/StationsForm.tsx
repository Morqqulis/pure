'use client'

import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { IFormProps } from '@/shared/interfaces/shared.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { StationFormSchema } from './station.types'
import { generalFormFields, promptsFormFields, stationFormDefaultValues } from './stations.data'
import { stationFormSchema } from './stations.schema'

export default function StationsForm({ variant, inModal, initialData }: IFormProps<StationFormSchema>) {
  const queryClient = useQueryClient()

  const form = useForm<StationFormSchema>({
    defaultValues: initialData ?? stationFormDefaultValues,
  })

  const createStation = useMutation({
    mutationFn: async (data: StationFormSchema) => {
      const validatedData = stationFormSchema.parse(data)
      return await axios.post('/api/stations', validatedData).then((res) => res.data)
    },
    onSuccess: () => {
      toast.success('Station created successfully')
      queryClient.invalidateQueries({ queryKey: ['stations'] })
      form.reset()
    },
    onError: () => {
      toast.error('Failed to create station')
    },
  })

  const updateStation = useMutation({
    mutationFn: async (data: StationFormSchema) => {
      const validatedData = stationFormSchema.parse(data)
      console.log(validatedData)
      return await axios.put(`/api/stations/${data.id}`, validatedData).then((res) => res.data)
    },
    onSuccess: () => {
      toast.success('Station updated successfully')
      queryClient.invalidateQueries({ queryKey: ['stations'] })
      form.reset()
    },
    onError: () => {
      toast.error('Failed to update station')
    },
  })

  const submitStationForm = (data: StationFormSchema) => {
    if (variant === 'create') {
      createStation.mutate(data)
    } else {
      updateStation.mutate(data)
    }
  }

  return (
    <Form {...form}>
      <form className={`max-h-[60vh] space-y-6 overflow-y-auto py-5`} onSubmit={form.handleSubmit(submitStationForm)}>
        <Tabs className={`w-full`} defaultValue={'general'}>
          <TabsList className={`grid grid-cols-2`}>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
          </TabsList>
          <TabsContent className={`space-y-6 rounded-lg border border-gray-700 bg-[#1a1a1a] p-6`} value={'general'}>
            <div className={`grid gap-6`}>
              {generalFormFields.map((generalField) => (
                <FormField
                  key={generalField.name}
                  control={form.control}
                  name={generalField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {generalField.label} {generalField.required && <span className={`text-red-500`}>*</span>}
                      </FormLabel>
                      <FormControl>
                        {generalField.type !== 'select' && (
                          <Input
                            {...field}
                            value={field.value?.toString() ?? ''}
                            placeholder={generalField.placeholder}
                            type={generalField.type}
                          />
                        )}
                      </FormControl>

                      {generalField.type === 'select' && (
                        <Select onValueChange={field.onChange} defaultValue={field.value?.toString()}>
                          <SelectTrigger className={`capitalize`}>
                            <SelectValue placeholder={generalField.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {generalField.options?.map((option) => (
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
          </TabsContent>
          <TabsContent className={`space-y-6 rounded-lg border border-gray-700 bg-[#1a1a1a] p-6`} value={'prompts'}>
            <div className={`grid gap-6`}>
              {promptsFormFields.map((promptField) => (
                <FormField
                  key={promptField.name}
                  control={form.control}
                  name={promptField.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {promptField.label} {promptField.required && <span className={`text-red-500`}>*</span>}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value?.toString() ?? ''}
                          placeholder={promptField.placeholder}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {inModal ? (
          <div className="flex justify-end items-center gap-4 mr-4">
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
                disabled={createStation.isPending || updateStation.isPending}
              >
                {variant === 'create' ? 'Create Station' : 'Update Station'}
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="flex justify-end items-center gap-4 mr-4">
            <Button variant={'outline'} type={'button'}>
              Cancel
            </Button>
            <Button type="submit" disabled={createStation.isPending || updateStation.isPending}>
              {variant === 'create' ? 'Create Station' : 'Update Station'}
            </Button>
          </div>
        )}
      </form>
    </Form>
  )
}
