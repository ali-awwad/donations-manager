import { CallToAction } from '@/Components/LandingComponents/CallToAction'
import { Faqs } from '@/Components/LandingComponents/Faqs'
import { Footer } from '@/Components/LandingComponents/Footer'
import { Header } from '@/Components/LandingComponents/Header'
import { Hero } from '@/Components/LandingComponents/Hero'
import { Pricing } from '@/Components/LandingComponents/Pricing'
import { PrimaryFeatures } from '@/Components/LandingComponents/PrimaryFeatures'
import { SecondaryFeatures } from '@/Components/LandingComponents/SecondaryFeatures'
import { Testimonials } from '@/Components/LandingComponents/Testimonials'
import { Head, usePage } from '@inertiajs/inertia-react'

export default function LandingPage() {
    const {appTitle} = usePage().props;
    return (
        <>
            <Head>
                <title>{appTitle}</title>
                <meta
                    name="description"
                    content={`${appTitle} is a tool that helps you and your team to
                    see the contributions you've made on the long term.`}
                />
            </Head>
            <Header />
            <main>
                <Hero />
                <PrimaryFeatures />
                <SecondaryFeatures />
                <CallToAction />
                {/* <Testimonials /> */}
                {/* <Pricing /> */}
                {/* <Faqs /> */}
            </main>
            <Footer />
        </>
    )
}
