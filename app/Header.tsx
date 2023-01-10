'use client'

import Link from 'next/link'
import { DownArrow } from '../icons'

export default function Header() {
  return (
    <div className="px-4 py-1 h-20 w-full flex gap-4 items-center fixed bg-white">
      <Link href="/">
        <div className="rounded-full bg-red-600 w-6 h-6" />
      </Link>
      <Link href="/">
        <div className="rounded-3xl h-11 bg-black text-white min-w-16 flex p-4 items-center justify-center">
          <div className="h-full leading-4">Home</div>
        </div>
      </Link>
      <Link href="/today">Today</Link>
      <div className="flex gap-2">
        <Link href="/create">Create</Link>
        <button
          onClick={() => {
            console.log('a')
          }}
        >
          <DownArrow />
        </button>
      </div>
    </div>
  )
}
