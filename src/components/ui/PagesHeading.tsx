interface PagesHeadingProps {
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PagesHeading({ title, description, children }: PagesHeadingProps) {
  return (
    <div className={`flex items-center justify-between gap-2`}>
      <div>
        <h1 className={`text-2xl font-semibold capitalize text-foreground`}>{title}</h1>
        {description && <p className={`text-sm text-muted-foreground`}>{description}</p>}
      </div>
      {children}
    </div>
  )
}
