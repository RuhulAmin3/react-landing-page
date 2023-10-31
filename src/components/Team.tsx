import { teamContent } from "../constant";
import TeamCard from "./ui/TeamCard";
import Titlebar from "./ui/Titlebar";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container team__container">
        <Titlebar title="Dedicated Team" text="Our Best">
          Lorem Ipsum is simply dummy text of the printing and typesetting has
          been the <br />
          industrys standard dummy text ever since
        </Titlebar>
        <div className="team__wrapper">
          {teamContent.map((content, idx) => (
            <TeamCard content={content} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
