import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import Layout from './Layouts/Layout';
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
    resolve: async name => {
        const page = (await import(`./Pages/${name}`)).default;
        if (page.layout === undefined && !name.startsWith('Auth/') && !name.startsWith('LandingPage')) {
            page.layout  = page.layout ?? (p => <Layout children={p} />);
          }

        return page;
    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
    title: title => parseInt(title)!==1 ? `${title}` : `Donation Manager`
})

InertiaProgress.init({
    color:'red'
})
