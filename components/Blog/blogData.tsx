import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Engineering the Future",
    paragraph: "How Civil Engineers are Building a Better World.",
    image: "/images/blog/1.jpg",
    author: {
      name: "newcivilengineer.com",
      image: "/images/blog/1.jpg",
      designation: "Website",
    },
    tags: ["Engineer"],
    publishDate: "Dec 04, 2019",
  },
  {
    id: 2,
    title: "The Power of Electricity",
    paragraph: "How Electrical Engineers are Transforming Our World.",
    image: "/images/blog/3.jpg",
    author: {
      name: "securityintelligence.com",
      image: "/images/blog/3.jpg",
      designation: "Website",
    },
    tags: ["Electricity"],
    publishDate: "Oct 30, 2017",
  },
  {
    id: 3,
    title: "Building the Future",
    paragraph:
      "How Software Engineers are Creating a More Connected and Efficient World.",
    image: "/images/blog/5.jpg",
    author: {
      name: "dice.com",
      image: "/images/blog/5.jpg",
      designation: "Website",
    },
    tags: ["Inspire"],
    publishDate: "Nov 11, 2022",
  },
];
export default blogData;
