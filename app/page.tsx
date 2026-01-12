import React from 'react'
import { Hero } from '@/components/landing/hero'
import { ProblemsSection } from '@/components/landing/problem'
import { InstallationSticky } from '@/components/landing/installation'
import HowItWorksSection from '@/components/landing/howItWorks'
import WarningExamples from '@/components/landing/examplePR'
import Footer from '@/components/layout/footer'

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <ProblemsSection/>
    <InstallationSticky/>
    <HowItWorksSection/>
    <WarningExamples/>
    <Footer/>
    </>
  )
}

export default LandingPage