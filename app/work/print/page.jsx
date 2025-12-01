import React from 'react'
// project image
import projectImgeOne from '../../../public/app-development/image-one.png'
import projectImgeTwo from '../../../public/app-development/image-two.png'
import projectImgeThree from '../../../public/app-development/image-three.png'
import projectImgeFour from '../../../public/app-development/image-four.jpeg'
import projectImgeFive from '../../../public/app-development/image-five.jpeg'
import projectImageSix from '../../../public/app-development/image-six.jpeg'
import projectImgeSeven from '../../../public/app-development/image-seven.jpeg'
import projectImgeEight from '../../../public/app-development/image-eight.jpeg'
import projectImgeNine from '../../../public/app-development/image-nine.jpeg'
import ProjectsSection from '@/components/app-development/ProjectsSection'


const appProjects = [
  {
    id: 'asdtools',
    name: 'ASD Tools',
    imageSrc: projectImgeOne,
    href: '#',
  },
  {
    id: 'payc',
    name: 'Payc',
    imageSrc: projectImgeTwo,
    href: '#',
  },
  {
    id: 'man-walk',
    name: 'The Man Walk',
    imageSrc: projectImgeThree,
    href: '#',
  },
  {
    id: 'things-to-do',
    name: 'Things To Do',
    imageSrc: projectImgeFour,
    href: '#',
  },
  {
    id: 'eat-smart',
    name: 'Eat Smart Play Smart',
    imageSrc: projectImgeFive,
    href: '#',
  },
  {
    id: 'devolver',
    name: 'Devolver',
    imageSrc: projectImageSix,
    href: '#',
  },
  {
    id: 'drops',
    name: 'Drops',
    imageSrc: projectImgeSeven,
    href: '#',
  },
  {
    id: 'nsw-alerts',
    name: 'NSW Incident Alerts',
    imageSrc: projectImgeEight,
    href: '#',
  },
  {
    id: 'my-bio-life',
    name: 'My Bio Life',
    imageSrc: projectImgeNine,
    href: '#',
  },
]

export default function PrintPage() {
  const appProjectsConfig = {
    // title: 'App development projects',
    projects: appProjects,
    seeMoreHref: '/projects',
    // seeMoreLabel: 'See more projects',
    ctaTitle: 'Interested in working with us?',
    primaryCta: {
      href: '/quote',
      label: 'Request a quote',
    },
    secondaryCta: {
      href: '/contact',
      label: 'Get in touch',
    },
  }
  return (
    <>
      <ProjectsSection {...appProjectsConfig} />
    </>
  )
}
