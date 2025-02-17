import { cn } from '@/lib/utils'

interface ErrorProps {
	className?: string
	where: string
	message: string
}

export default function Error({ message, className, where }: ErrorProps) {
	return (
		<div className={cn('flex flex-col items-center justify-center', className)}>
			<h3 className='font-bold text-2xl'>Error</h3>
			<p className='text-gray-500 text-sm'>
				{message} at {where}
			</p>
		</div>
	)
}
