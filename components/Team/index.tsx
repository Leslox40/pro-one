import SectionTitle from "../Common/SectionTitle";
import Member from "./Member";
import teamData from "./teamData";

const Team = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Voici notre Team d'Ingénieurs"
          paragraph="Rencontrez notre equipe d'experts qui faconnent et repondent a tout vos besoins"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {teamData.map((team) => (
            <div key={team.id} className="w-full">
              <Member project={team} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
