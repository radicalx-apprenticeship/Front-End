import arrow from "../../assets/arrow-left.svg";
import AddLogo from "../../assets/add-square.svg";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const ApprenticeshipHeader = () => {
  const history = useNavigate();

  return (
    <div className="appren-header">
      {/* Go Back Button */}
      <button
        className="back-btn-container back-button"
        onClick={() => {
          // go back handler
          history(-1);
        }}
      >
        <img src={arrow} alt="" />
        <p> Back</p>
      </button>
      <h2>Creating Apprenticeship</h2>
      <Button icon={AddLogo} disabled>
        Publish Apprenticeship
      </Button>
    </div>
  );
};

export default ApprenticeshipHeader;
