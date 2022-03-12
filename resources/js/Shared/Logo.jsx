import { CakeIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Logo() {
  return (
    <div className='text-indigo-200 text-xl flex w-full items-center'>
    <CakeIcon className="h-8 w-auto" />
    <span className='ml-2'>Donation Tracker</span>
    </div>
  )
}
