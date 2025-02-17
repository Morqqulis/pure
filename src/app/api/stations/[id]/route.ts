import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json()
    const { id } = await params
    const result = await prisma.station.update({
      where: { id: Number(id) },
      data: body,
    })
    return NextResponse.json(result)
  } catch (error) {
    console.error('Failed to update station:', error)
    return NextResponse.json({ error: 'Failed to update station' }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.station.delete({
      where: { id: Number(id) },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete station:', error)
    return NextResponse.json({ error: 'Failed to delete station' }, { status: 500 })
  }
}
