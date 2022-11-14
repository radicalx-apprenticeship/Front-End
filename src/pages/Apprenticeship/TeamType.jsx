import { useState } from "react";
import { CardContainer } from "../../components";
import TickCircle from "../../assets/tick-circle-complete.svg";
import UntickCircle from "../../assets/untick-circle-complete.svg";
import Monitor from "../../assets/monitor.svg";
import Mobile from "../../assets/mobile.svg";
import Diagram from "../../assets/diagram.svg";
import Keyboard from "../../assets/keyboard-open.svg";
import Box from "../../assets/box.svg";
import Driver from "../../assets/driver.svg";
import Box2 from "../../assets/box-2.svg";

const TeamType = () => {
  const teamTypes = [
    { name: "Web Platform", logo: Monitor },
    { name: "Mobile App", logo: Mobile },
    { name: "Growth", logo: Diagram },
    { name: "Marketing Website", logo: Keyboard },
    { name: "Prototyping", logo: Box },
    { name: "Data", logo: Driver },
    { name: "Custom Team", logo: Box2 },
  ];

  const [teamType, setTeamType] = useState("");
  const onChange = (e) => {
    setTeamType(e.target.value);
  };
  return (
    <CardContainer title="Team Type">
      <div className="team-type">
        {teamTypes.map((type, index) => (
          <label
            key={type.name}
            htmlFor={"radio-" + index}
            className={`team-type__container ${
              teamType === type.name ? "team-type__container--selected" : ""
            }`}
          >
            <div key={index} className="team-type__item">
              <img
                src={type.logo}
                alt={type.name}
                className="team-type__icon"
              />
              <p>{type.name}</p>
            </div>
            <img
              src={teamType === type.name ? TickCircle : UntickCircle}
              alt=""
              className="team-type__tick"
            />
            <input
              type="radio"
              id={"radio-" + index}
              value={type.name}
              checked={teamType === type.name}
              onChange={onChange}
            />
          </label>
        ))}
      </div>
    </CardContainer>
  );
};

export default TeamType;
