// Need to seed the database with the following data:
// mockLocations

import prisma from '../src/lib/prisma'
const mockLocations = [
  {
    id: 1,
    name: 'New York Studio',
    country: 'US',
    city: 'New York',
    timezone: 'America/New_York',
  },
  {
    id: 2,
    name: 'London Office',
    country: 'GB',
    city: 'London',
    timezone: 'Europe/London',
  },
  {
    id: 3,
    name: 'Los Angeles Studio',
    country: 'US',
    city: 'Los Angeles',
    timezone: 'America/Los_Angeles',
  },
  {
    id: 4,
    name: 'Berlin Studio',
    country: 'DE',
    city: 'Berlin',
    timezone: 'Europe/Berlin',
  },
  {
    id: 5,
    name: 'Amsterdam Studio',
    country: 'NL',
    city: 'Amsterdam',
    timezone: 'Europe/Amsterdam',
  },
]

const seedLocations = async () => {
  const locations = await prisma.location.findMany()
  if (locations.length > 0) return

  await prisma.location.createMany({
    data: mockLocations,
  })
}

seedLocations().then(() => {
  console.log('Locations seeded successfully')
})
