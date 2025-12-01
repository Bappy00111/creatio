

import ProjectsSection from "@/components/app-development/ProjectsSection";
import AppDevelopmentHome from "@/components/app-development/DevelopmentHome";
import WhyWorkWithUs from "@/components/app-development/WhyWorkWithUs";
// home
import one from '../../public/app-development/image-one.png'
import two from '../../public/app-development/image-two.png'
import three from '../../public/app-development/image-three.png'
import four from '../../public/app-development/image-four.jpeg'
import five from '../../public/app-development/image-five.jpeg'
import six from '../../public/app-development/image-six.jpeg'
import seven from '../../public/app-development/image-seven.jpeg'
import eight from '../../public/app-development/image-eight.jpeg'
import nine from '../../public/app-development/image-nine.jpeg'
// icon
import iconone from "../../public/app-development/icon-one.svg";
import icontwo from "../../public/app-development/icon-two.svg";
import iconthree from "../../public/app-development/icon-three.svg";

// project image
import projectImgeOne from "../../public/app-development/image-one.png";
import projectImgeTwo from "../../public/app-development/image-two.png";
import projectImgeThree from "../../public/app-development/image-three.png";
import projectImgeFour from "../../public/app-development/image-four.jpeg";
import projectImgeFive from "../../public/app-development/image-five.jpeg";
import projectImageSix from "../../public/app-development/image-six.jpeg";
import projectImgeSeven from "../../public/app-development/image-seven.jpeg";
import projectImgeEight from "../../public/app-development/image-eight.jpeg";
import projectImgeNine from "../../public/app-development/image-nine.jpeg";
import DevelopmentHome from "@/components/app-development/DevelopmentHome";


const appProjects = [
  {
    id: "asdtools",
    name: "ASD Tools",
    imageSrc: projectImgeOne,
    href: "#",
  },
  {
    id: "payc",
    name: "Payc",
    imageSrc: projectImgeTwo,
    href: "#",
  },
  {
    id: "man-walk",
    name: "The Man Walk",
    imageSrc: projectImgeThree,
    href: "#",
  },
  {
    id: "things-to-do",
    name: "Things To Do",
    imageSrc: projectImgeFour,
    href: "#",
  },
  {
    id: "eat-smart",
    name: "Eat Smart Play Smart",
    imageSrc: projectImgeFive,
    href: "#",
  },
  {
    id: "devolver",
    name: "Devolver",
    imageSrc: projectImageSix,
    href: "#",
  },
  {
    id: "drops",
    name: "Drops",
    imageSrc: projectImgeSeven,
    href: "#",
  },
  {
    id: "nsw-alerts",
    name: "NSW Incident Alerts",
    imageSrc: projectImgeEight,
    href: "#",
  },
  {
    id: "my-bio-life",
    name: "My Bio Life",
    imageSrc: projectImgeNine,
    href: "#",
  },
];

export default function AwsAmazonWebServices() {
  // data/appDevelopmentServices.ts\
  const servicesData = [
    { id: 1, label: "Scalable architecture" },
    { id: 2, label: "Serverless applications" },
    { id: 3, label: "Security & monitoring" },
    { id: 4, label: "Automated CI/CD" },
    { id: 5, label: "Startup friendly" },
    { id: 6, label: "Global infrastructure" },
  ];


  const appDevConfig = {
    heroTitle: "AWS Developers",
    heroDescription:
      "We have a wealth of knowledge and experience hosting and maintaining cloud native solutions on Amazon Web Services (AWS). Tailored to meet your needs, we draw on our 14 years of experience working with AWS to build secure and scalable solutions following industry standards and best practices.",
    buttonLabel: "Request a quote",
    rightImageSrc:
      "https://www.creatio.com.au/static/images/img/AWS.svg",
    rightImageAlt: "Team working at computers",
    servicesTitle: "Why we build on AWS",
    services: servicesData,
  };


  const whyWorkWithUsData = [
    {
      id: "smooth-process",
      title: "A smooth process",
      description:
        "Lots of companies do what we do, but we think you’ll really like working with us. From the earliest stages of your project all the way through until launch and beyond, you can count on us.",
      linkLabel: "Take a look at how we work",
      linkHref: "/how-we-work",
      icon: iconone,
    },
    {
      id: "happy-clients",
      title: "Lots of happy clients",
      description:
        "We’ve worked hundreds of clients from all industries – including startups, government, finance, media, ecommerce, education, fashion, nonprofit and agriculture to name a few.",
      linkLabel: "See what our clients say",
      linkHref: "/clients",
      icon: icontwo,
    },
    {
      id: "years-of-experience",
      title: "Years of experience",
      description:
        "For over 17 years we’ve been designing, developing, deploying and supporting digital products for clients around Australia and the world. How can we help you?",
      linkLabel: "Learn more about us",
      linkHref: "/about",
      icon: iconthree,
    },
  ];


  const appProjectsConfig = {
    title: "Recent projects built on AWS",
    projects: appProjects,
    seeMoreHref: "/projects",
    seeMoreLabel: "See more projects",
    ctaTitle: "Interested in working with us?",
    primaryCta: {
      href: "/quote",
      label: "Request a quote",
    },
    secondaryCta: {
      href: "/contact",
      label: "Get in touch",
    },
  };




  return (
    <>
      <DevelopmentHome {...appDevConfig} />
      <WhyWorkWithUs
        title="Why work with us"
        items={whyWorkWithUsData} />
      <ProjectsSection {...appProjectsConfig} />
    </>
  );
}
