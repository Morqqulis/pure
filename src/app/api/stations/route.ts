import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const stations = await prisma.station.findMany({
      include: {
        locations: true,
        // location: true,
        // client: true,
      },
    })

    return NextResponse.json(stations)
  } catch (error) {
    console.error('Error fetching stations:', error)
    return NextResponse.json({ error: 'Failed to fetch stations' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data

    const updatedStation = await prisma.station.update({
      where: { id: Number(id) },
      data: { clientId: Number(updateData.clientId), ...updateData },
      include: {
        locations: true,
        // 	client: true,
      },
    })

    return NextResponse.json(updatedStation)
  } catch (error) {
    console.error('Error updating station:', error)
    return NextResponse.json({ error: 'Failed to update station' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log(data)
    const newStation = await prisma.station.create({
      data,
      include: {
        locations: true,
        // 	client: true,
      },
    })

    return NextResponse.json(newStation)
  } catch (error) {
    console.error('Error creating station:', error)
    return NextResponse.json({ error: 'Failed to create station' }, { status: 500 })
  }
}
