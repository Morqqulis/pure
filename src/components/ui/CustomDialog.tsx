import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type CustomDialogProps = {
  className?: string
  title: string
  description: string
  triggerChildren: React.ReactNode
  children: React.ReactNode
}

export default function CustomDialog({ title, description, children, triggerChildren, className }: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerChildren}</DialogTrigger>
      <DialogContent className={cn(className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
