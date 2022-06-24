import { PaperAirplaneIcon, PencilAltIcon, RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

export default function FormSubmitButton({ loading, text = 'Submit', isEdit=false, btn = 'button-primary' }) {
    return (
        <button
            type="submit"
            disabled={loading}
            className={`button ${btn} ml-2`}
        >
            {loading && <RefreshIcon className={`w-5 h-5 stroke-current mr-1 animate-spin`} />}
            {(!loading && !isEdit) && <PaperAirplaneIcon className='w-5 h-5 rotate-90 stroke-current mr-1' />}
            {(!loading && isEdit) && <PencilAltIcon className='w-5 h-5 rotate-90 stroke-current mr-1' />}
            Save
        </button>
    )
}
