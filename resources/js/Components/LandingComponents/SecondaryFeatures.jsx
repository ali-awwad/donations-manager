// import { useId } from 'react'
// import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/Components/LandingComponents/Container'
import { CakeIcon, PencilAltIcon, TagIcon } from '@heroicons/react/outline'
import { usePage } from '@inertiajs/inertia-react'


function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={clsx('w-9 rounded-lg', {
          'bg-blue-600': isActive,
          'bg-slate-500': !isActive,
        })}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon className={`stroke-current text-white`} />
        </svg>
      </div>
      <h3
        className={clsx('mt-6 text-sm font-medium', {
          'text-blue-600': isActive,
          'text-slate-600': !isActive,
        })}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
    const {screenshotCreate,
        screenshotDonations,
        screenshotCampaigns} = usePage().props;
    const features = [
      {
        name: 'Categories & Campaigns',
        summary: 'Organize your donations using campaigns.',
        description:
          'Have as many Campaigns as needed, you can ditribute them across different Categories.',
        image: screenshotCampaigns,
        icon: TagIcon,
      },
      {
        name: 'Donors & Donations',
        summary:
          'Never lose track of your donations.',
        description:
          'Simple management tool that enables you to filter through your donations by donor name, category name ..., and even sort them by different fields.',
        image: screenshotDonations,
        icon: CakeIcon,
      },
      {
        name: 'Easy to Start',
        summary:
          'Easily start your donations using simple form.',
        description:
          'Our form creation tool helps you add donations easily once you have your category, campaign, and donor names set.',
        image: screenshotCreate,
        icon: PencilAltIcon,
      },
    ]


  return (
    <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />

              <img
                src={feature.image}
                alt=""
                layout="fill"
                className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
                sizes="52.75rem"
              />
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
    const {screenshotCreate,
        screenshotDonations,
        screenshotCampaigns} = usePage().props;
    const features = [
      {
        name: 'Categories & Campaigns',
        summary: 'Organize your donations using campaigns.',
        description:
          'Have as many Campaigns as needed, you can ditribute them across different Categories.',
        image: screenshotCampaigns,
        icon: TagIcon,
      },
      {
        name: 'Donors & Donations',
        summary:
          'Never lose track of your donations.',
        description:
          'Simple management tool that enables you to filter through your donations by donor name, category name ..., and even sort them by different fields.',
        image: screenshotDonations,
        icon: CakeIcon,
      },
      {
        name: 'Easy to Start',
        summary:
          'Easily start your donations using simple form.',
        description:
          'Our form creation tool helps you add donations easily once you have your category, campaign, and donor names set.',
        image: screenshotCreate,
        icon: PencilAltIcon,
      },
    ]


  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    {
                      'opacity-60': featureIndex !== selectedIndex,
                    }
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <img
                      src={feature.image}
                      alt=""
                      layout="fill"
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
    const {appTitle} = usePage().props;
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Simplify Donation's Process.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Instead of having a tool that has everything to do with donations,
             with this {appTitle} tool we focus only on few most used pages.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
