import { CakeIcon } from '@heroicons/react/outline'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Logo() {
    const {appTitle} = usePage().props;
  return (
    <div className='text-indigo-200 text-xl flex w-full items-center'>
    <CakeIcon className="h-8 w-auto" />
    <span className='ml-2'>{appTitle}</span>
    </div>
  )
}
