import teamImg1 from "../../assets/images/team1.jpg";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const TeamCard = () => {
  return (
    <div className="team__card">
      <img src={teamImg1} alt="team member" />
      <div className="team__overlay">
        <ul>
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillTwitterCircle />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="team__identity">
        <h2>Michael Jackson</h2>
        <p>UI / Ux Designer</p>
      </div>
    </div>
  );
};

export default TeamCard;
