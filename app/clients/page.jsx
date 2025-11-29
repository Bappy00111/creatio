import ClientLogos from '@/components/clients/ClientLogos'
import ClientsHome from '@/components/clients/ClientsHome'
import ClientTestimonials from '@/components/clients/ClientTestimonials'
import React from 'react'

export default function Clients() {
  return (
    <div>
      <ClientsHome />
      <ClientLogos />
      <ClientTestimonials />
    </div>
  )
}

