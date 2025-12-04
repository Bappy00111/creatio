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
    id: "asdtools",
    name: "ASD Tools App",
    year: "2025",
    shortDesc: "Creatio were engaged to develop a new version of the iPhone & iPad apps for ASD Tools - the evidence-based app for children with autism.",
    longDesc:
      "ASD Tools is a complete system for tracking behaviour, creating reports, managing therapy schedules and improving daily ASD routines. Designed with accessibility and simplicity in mind.",
    imageSrc: projectImgeOne,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "payc",
    name: "Payc - Mobile App & Wallet",
    year: "2025",
    shortDesc: "Payc is a casual employment app for the hospitality industry, allowing staff to get matched with jobs and get paid instantly after every shift to their mobile wallet.",
    longDesc:
      "Payc is designed for both individuals and businesses, offering instant payments, transaction tracking, invoicing tools and a clean, easy-to-use interface.",
    imageSrc: projectImgeTwo,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "man-walk",
    name: "The Man Walk App",
    year: "2024",
    shortDesc: "We recently designed and developed an app for The Man Walk, an Australia-wide community that encourages physical and mental health.",
    longDesc:
      "The Man Walk mobile app enables users to find walking groups, join community events and stay connected with their local health support initiatives.",
    imageSrc: projectImgeThree,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "things-to-do",
    name: "Things To Do App",
    year: "2023",
    shortDesc: "We recently designed and developed an app for The Man Walk, an Australia-wide community that encourages physical and mental health. ",
    longDesc:
      "Things To Do helps people explore local attractions, events, activities and hidden gems with curated recommendations and real-time updates.",
    imageSrc: projectImgeFour,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "eat-smart",
    name: "Eat Smart Play Smart App",
    year: "2023",
    shortDesc: "Creatio designed & developed the 'Eat Smart Play Smart' app for the University of Wollongong.",
    longDesc:
      "Eat Smart Play Smart provides educational tools, nutrition plans, sports activity guidelines and personalised learning programs for families.",
    imageSrc: projectImgeFive,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "devolver",
    name: "Devolver App",
    year: "2022",
    shortDesc: "We designed & developed the mobile apps for Devolver, a startup that provides food retailers and takeaway lovers with reusable containers that make waste free takeaway easy.",
    longDesc:
      "Devolver helps companies streamline workflows, automate reporting, and track operational metrics in a clean, fast mobile-first dashboard.",
    imageSrc: projectImageSix,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "drops",
    name: "SparkDrop",
    year: "2022",
    shortDesc: "Introducing SparkDrop - a free app for Aussie farmers to record their rainfall and share it! SparkDrop was proudly designed & developed by Creatio.",
    longDesc:
      "Drops allows users to quickly save thoughts, reminders and lists with instant cloud sync and a beautifully minimal interface.",
    imageSrc: projectImgeSeven,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "nsw-alerts",
    name: "NSW Incident Alerts",
    year: "2022",
    shortDesc: "Creatio designed & developed the NSW Incident Alerts app, which provides realtime location-based alerts for weather, bushfire, traffic and police incidents in NSW.",
    longDesc:
      "The NSW Alerts app provides real-time incident updates, fire warnings, traffic alerts and emergency notifications across NSW.",
    imageSrc: projectImgeEight,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },

  {
    id: "my-bio-life",
    name: " My Bio Life App",
    year: "2021",
    shortDesc: "MyBio.life is an app for storing your life documents and important information, which can be accessed securely by your family and loved ones. ",
    longDesc:
      "My Bio Life delivers personalised wellness insights, activity tracking and lifestyle recommendations based on biometric data.",
    imageSrc: projectImgeNine,
    popupImages: [
      "https://www.creatio.com.au/media/ADSTools.webp",
      "https://www.creatio.com.au/media/Payc.webp",
      "https://www.creatio.com.au/media/The-man-Walk.webp",
      "https://www.creatio.com.au/media/thingstodo-project.webp",
      "https://www.creatio.com.au/media/esps-project.webp",
      "https://www.creatio.com.au/media/devolver-project.webp",
    ],
  },
];

export default function StartupsPage() {
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
