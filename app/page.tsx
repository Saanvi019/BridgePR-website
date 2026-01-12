import React from 'react'
import { Hero } from '@/components/landing/hero'
import { ProblemsSection } from '@/components/landing/problem'
import { InstallationSticky } from '@/components/landing/installation'

const LandingPage = () => {
  return (
    <>
    <Hero/>
    <ProblemsSection/>
    <InstallationSticky/>
    </>
  )
}

export default LandingPage