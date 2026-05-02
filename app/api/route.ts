import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, business, message } = body

  // You can add email sending here later (e.g. Resend or Nodemailer)
  console.log('Contact form submission:', { name, business, message })

  return NextResponse.json({ success: true })
}