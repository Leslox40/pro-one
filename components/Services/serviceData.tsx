import { Project } from "@/types/project";

export const portfolioData: Project[] = [
  {
    id: 1,
    title: "Batiment & Travaux Public",
    paragraph:
      "Nous vous aidons à créer un environnement plus sûr, plus efficace et plus durable.",
    image: "/images/services/building.jpg",
    tags: ["Engineer"],
  },
  {
    id: 2,
    title: "Ingénierie Electrical",
    paragraph:
      "Nous sommes votre partenaire de confiance en matière d'ingénierie électrique.",
    image: "/images/services/house.jpg",
    tags: ["Engineer"],
  },
  {
    id: 3,
    title: "Ingénierie Logicielle",
    paragraph:
      "Nous sommes experts en ingénierie logicielle, de la conception à la maintenance.",
    image: "/images/services/software.jpg",
    tags: ["Engineer"],
  },
  {
    id: 4,
    title: "Formations",
    paragraph:
      "Nous vous formons, et vous nous transmettons des competences utiles donc vous avez besion pour reussir",
    image: "/images/services/formation.jpg",
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
