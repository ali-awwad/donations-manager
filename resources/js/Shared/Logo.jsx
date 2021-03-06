import { CakeIcon } from '@heroicons/react/outline'
import { usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Logo({color = 'text-indigo-200'}) {
    const {appTitle, logo} = usePage().props;
  return (
    <div className={`${color} text-xl flex w-full items-center`}>
    {/* <CakeIcon className="h-8 w-auto" /> */}
    <img className="h-8 w-auto" src={logo} />
    <span className='ml-2'>{appTitle}</span>
    </div>
  )
}
