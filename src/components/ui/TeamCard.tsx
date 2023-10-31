import { FaFacebook } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

type ContentType = {
  image: string;
  name: string;
  designation: string;
};

type PropsType = {
  content: ContentType;
};

const TeamCard = ({ content }: PropsType) => {
  return (
    <div className="team__card">
      <img src={content.image} alt="team member" />
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
        <h2>{content.name}</h2>
        <p>{content.designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
