import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'app-ads.txt')
  try {
    const content = await fs.promises.readFile(filePath, 'utf8')
    return new NextResponse(content, {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err) {
    return new NextResponse('Not found', { status: 404 })
  }
}
