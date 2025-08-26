import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

export async function POST(request: NextRequest) {
  try {
    const { 
      name, 
      email, 
      phone, 
      company, 
      position, 
      projectType, 
      budget, 
      timeline, 
      location, 
      description, 
      requirements 
    } = await request.json()

    if (!name || !email || !projectType || !budget || !timeline || !description) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()

    const db = client.db('portfolio')
    const collection = db.collection('hire_requests')

    const result = await collection.insertOne({
      name,
      email,
      phone,
      company,
      position,
      projectType,
      budget,
      timeline,
      location,
      description,
      requirements,
      createdAt: new Date(),
      status: 'new',
      priority: budget === '50k-plus' ? 'high' : budget === '30k-50k' ? 'medium' : 'normal'
    })

    await client.close()

    return NextResponse.json(
      { message: 'Hire request submitted successfully!', id: result.insertedId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Hire form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit hire request. Please try again.' },
      { status: 500 }
    )
  }
}