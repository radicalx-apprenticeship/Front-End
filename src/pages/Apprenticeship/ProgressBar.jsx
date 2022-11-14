import TickCircle from "../../assets/tick-circle.svg";
import UntickCircle from "../../assets/untick-circle.svg";
const progressBarTitle = [
  "Company Title & Description",
  "Team Type",
  "Team Roles",
  "Team Admin",
  "Timeline",
];
const ProgressBar = () => {
  const completed = [false, false, false, false, false];
  const progressBarItems = progressBarTitle.map((item, index) => {
    return { title: item, completed: completed[index] };
  });

  return (
    <div className="progress-bar">
      {progressBarItems.map((item) => {
        return (
          <div
            className={`progress-bar__item ${
              item.completed ? "progress-bar__item--completed" : ""
            }`}
            key={item.title}
          >
            <img
              src={item.completed ? TickCircle : UntickCircle}
              alt="tick-circle"
              className="progress-bar__item__tick"
            />
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
