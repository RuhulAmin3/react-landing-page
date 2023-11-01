import { teamContent } from "../constant";
import TeamCard from "./ui/TeamCard";
import Titlebar from "./ui/Titlebar";
import styles from "../styles/_team.module.scss";
const Team = () => {
  return (
    <section className={`${styles["team"]}`} id="team">
      <div className={`${styles["team__container"]} ${styles["container"]}`}>
        <Titlebar title="Dedicated Team" text="Our Best">
          We offer a dedicated team of experts ready to be an extension of
          yourongoing support, in-house workforce.
          <br />
          Whether you're embarking on a new project or need our dedicated
          professionals are here to meet your specific needs.
        </Titlebar>
        <div className={`${styles["team__wrapper"]}`}>
          {teamContent.map((content, idx) => (
            <TeamCard content={content} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
