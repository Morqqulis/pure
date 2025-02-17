import { getApiDocs } from '@/lib/swagger/swagger'
import ReactSwagger from '@/lib/swagger/swaggerCompoennt'

export default async function IndexPage() {
  const spec = await getApiDocs()
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  )
}
