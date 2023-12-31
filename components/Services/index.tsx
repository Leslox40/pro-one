import SectionTitle from "../Common/SectionTitle";
import ServiceCard from "./ServiceCard";
import { portfolioData } from "./serviceData";

const Services = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Nos services"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {portfolioData.map((project) => (
            <div key={project.id} className="w-full">
              <ServiceCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
