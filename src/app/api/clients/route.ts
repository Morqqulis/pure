import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     tags:
 *      - Hello
 *     responses:
 *       200:
 *         description: hello world
 */
export async function GET() {
  
  try {
    const allClients = await prisma.client.findMany()
    return NextResponse.json(allClients)
  } catch (error) {
    console.error('Error fetching clients:', error)
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // const stationIds = Array.isArray(data.stationIds) ? data.stationIds.map(Number) : []

    const existingClient = await prisma.client.findUnique({
      where: {
        email: data.email,
      },
    })

    if (existingClient) {
      return NextResponse.json({ error: 'Client already exists' }, { status: 400 })
    }

    const client = await prisma.client.create({ data })

    return NextResponse.json(client)
  } catch (error) {
    console.error('Error creating client:', error)
    return NextResponse.json({ error: 'Failed to create client' }, { status: 500 })
  }
}
