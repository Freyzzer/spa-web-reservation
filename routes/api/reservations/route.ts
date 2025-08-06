import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, phone, service, date, time } = body

  if (!name || !email || !phone || !service || !date || !time) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  const { data, error } = await supabase.from('reservations').insert([
    {
      name,
      email,
      phone,
      service,
      date,
      time,
      payment_status: 'pending',
    },
  ])

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ reservation: data }, { status: 201 })
}
