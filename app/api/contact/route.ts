import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const client = new MongoClient(process.env.MONGODB_URI!)
    await client.connect()

    const db = client.db('portfolio')
    const collection = db.collection('contacts')

    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      status: 'new'
    })

    await client.close()

    return NextResponse.json(
      { message: 'Message sent successfully!', id: result.insertedId },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}