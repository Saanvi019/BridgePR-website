import React from 'react'
import { Hero } from '@/components/landing/hero'
import { ProblemsSection } from '@/components/landing/problem'
import { InstallationSticky } from '@/components/landing/installation'
import HowItWorksSection from '@/components/landing/howItWorks'

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <ProblemsSection/>
    <InstallationSticky/>
    <HowItWorksSection/>
    </>
  )
}

export default LandingPage