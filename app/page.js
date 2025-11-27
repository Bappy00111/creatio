import AboutUsSection from '@/components/about/AboutUsSection'
import ClientsTestimonialsSection from '@/components/clientsTestimonialsSection/ClientsTestimonialsSection'
import Hero from '@/components/hero/Hero'
import HeroImage from '@/components/hero/HeroImage'
import LogoCarousel from '@/components/logoCarousel/LogoCarousel'
import RecentProjectsSection from '@/components/recent/RecentProjectsSection'
import ServicesAndCTASection from '@/components/service/ServicesAndCTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <HeroImage />
      <ServicesAndCTASection />
      <RecentProjectsSection />
      <AboutUsSection />
      <ClientsTestimonialsSection />
      <LogoCarousel />
    </>
  )
}
