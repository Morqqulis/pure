export interface IFormProps<T> {
  variant: 'create' | 'edit'
  inModal: boolean
  initialData?: T
}
