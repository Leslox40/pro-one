import { Project } from "@/types/project";

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Batiment & Travaux Public",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/services/building.jpg",
    tags: ["Engineer"],
  },
  {
    id: 2,
    title: "Electrical Engineering",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/services/house.jpg",
    tags: ["Engineer"],
  },
  {
    id: 3,
    title: "Software Engineering",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/5.png",
    tags: ["Engineer"],
  },
  {
    id: 4,
    title: "Formation",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/5.png",
    tags: ["Engineer"],
  },
];

export const serviceSectionData = {
  sectionOne: {
    services: {
      title: 'hello1',
      paragraph: 'The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables',
      listOne: ['Premium Quality', 'Tailwind CSS', 'Use for Lifetime'],
      listTwo: ['Next.js', 'Rich Documentation', 'Developer friendly'],
      imgSrc: '/images/services/a.png',
    },
    software: {
      title: 'hello2',
      paragraph: 'hi I am hello',
      listOne: ['Premium Quality', 'Tailwind CSS', 'Use for Lifetime'],
      listTwo: ['Next.js', 'Rich Documentation', 'Developer friendly'],
      imgSrc: '/images/services/a.png',
    },
    electrical: {
      title: 'hello3',
      paragraph: 'hi I am hello',
      listOne: ['Premium Quality', 'Tailwind CSS', 'Use for Lifetime'],
      listTwo: ['Next.js', 'Rich Documentation', 'Developer friendly'],
      imgSrc: '/images/services/a.png',
    },
    structural: {
      title: 'hello4',
      paragraph: 'hi I am hello',
      listOne: ['Premium Quality', 'Tailwind CSS', 'Use for Lifetime'],
      listTwo: ['Next.js', 'Rich Documentation', 'Developer friendly'],
      imgSrc: '/images/services/a.png',
    },
  },
  sectionTwo: {
    services: {
      imgSrc: '/images/services/a.png',
      header1: '',
      paragraph1: '',
      header2: '',
      paragraph2: '',
      header3: '',
      paragraph3: '',
    },
    software: {
      imgSrc: '/images/services/a.png',
      header1: '',
      paragraph1: '',
      header2: '',
      paragraph2: '',
      header3: '',
      paragraph3: '',
    },
    electrical: {
      imgSrc: '/images/services/a.png',
      header1: '',
      paragraph1: '',
      header2: '',
      paragraph2: '',
      header3: '',
      paragraph3: '',
    },
    structural: {
      imgSrc: '/images/services/a.png',
      header1: '',
      paragraph1: '',
      header2: '',
      paragraph2: '',
      header3: '',
      paragraph3: '',
    },
  }
}
