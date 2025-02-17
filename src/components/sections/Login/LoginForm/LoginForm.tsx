'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import type { LoginSchema } from './login.schema'
import { loginSchema } from './login.schema'
import { loginFormFields } from './login.data'

export default function LoginForm() {
  const router = useRouter()
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const submitLoginForm = useMutation({
    mutationFn: async (data: LoginSchema) => await axios.post('/api/auth/login', data).then((res) => res.data),
    onSuccess: () => {
      form.reset()
      toast.success('Login successful')
      setTimeout(() => {
        router.push('/')
      }, 2000)
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        toast.error('Invalid credentials')
      } else {
        toast.error('Login failed')
      }
    },
  })

  return (
    <Form {...form}>
      <form className={`grid gap-4 text-white`} onSubmit={form.handleSubmit((data) => submitLoginForm.mutate(data))}>
        {loginFormFields.map((loginFormField) => (
          <FormField
            key={loginFormField.name}
            control={form.control}
            name={loginFormField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {loginFormField.label} {loginFormField.required && <span className={`text-red-500`}>*</span>}
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder={loginFormField.placeholder} type={loginFormField.type} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" disabled={submitLoginForm.isPending}>
          {submitLoginForm.isPending ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Form>
  )
}
