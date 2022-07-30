// import Image from 'next/image'

import { ButtonLink } from '@/Components/LandingComponents/Button'
import { Container } from '@/Components/LandingComponents/Container'
import { usePage } from '@inertiajs/inertia-react'

export function CallToAction() {
    const {appTitle, backgroundImage} = usePage().props;
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
        <img
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}

          className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'
        />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {appTitle} is totally free to use.
          </p>
          <ButtonLink href="/register" color="white" className="mt-10">
            Register Now
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
