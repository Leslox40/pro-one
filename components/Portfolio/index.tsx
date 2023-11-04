import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import portfolioData from "./portfolioData";

const Portfolio = ({ limit }) => {
  console.log(limit);
  let data = limit > 0 ? portfolioData.slice(0, limit) : portfolioData;
  console.log(data)
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Some of our projects"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {data.map((project) => (
            <div key={project.id} className="w-full">
              <SingleProject project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
