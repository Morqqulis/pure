import { cn } from '@/lib/utils'

interface LoadingProps {
	message: string
	className?: string
}

export default function Loading({ message, className }: LoadingProps) {
	return (
		<div className={cn('flex flex-col justify-center items-center', className)}>
			<h3 className='font-bold text-2xl'>Loading</h3>
			<p className='text-gray-500 text-sm'>{message}</p>
		</div>
	)
}
