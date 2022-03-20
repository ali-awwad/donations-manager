import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function FormCancelButton({href}) {
    return (
        <Link
            href={href}
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Cancel
        </Link>
    )
}
