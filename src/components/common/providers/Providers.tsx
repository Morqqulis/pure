import TanStackProvider from '@/components/common/providers/TanStackProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
	return <TanStackProvider>{children}</TanStackProvider>
}
