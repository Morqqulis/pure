import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const data = await request.json()
    const { id } = await params

    const updatedLocation = await prisma.location.update({
      where: { id: Number(id) },
      data,
    })

    if (!updatedLocation) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 })
    }

    return NextResponse.json(updatedLocation)
  } catch (error) {
    console.error('Error updating location:', error)
    return NextResponse.json({ error: 'Failed to update location' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params

    const deletedLocation = await prisma.location.delete({
      where: { id: Number(id) },
    })

    if (!deletedLocation) {
      return NextResponse.json({ error: 'Location not found' }, { status: 404 })
    }

    return NextResponse.json(deletedLocation)
  } catch (error) {
    console.error('Error deleting location:', error)
    return NextResponse.json({ error: 'Failed to delete location' }, { status: 500 })
  }
}
