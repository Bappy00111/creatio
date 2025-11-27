import AboutHome from '@/components/aboutPage/AboutHome'
import TeamSection from '@/components/aboutPage/TeamSection'
import { WhatWeDoSection } from '@/components/aboutPage/WhatWeDoSection'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      <AboutHome />
      <WhatWeDoSection />
      <TeamSection />
    </>
  )
}

