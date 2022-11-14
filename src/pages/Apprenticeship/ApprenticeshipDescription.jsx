import { useState } from "react";
import { CardContainer } from "../../components";
const ApprenticeshipDescription = () => {
  const [apprenticeshipDescription, setApprenticeshipDescription] =
    useState("");
  return (
    <CardContainer title="Apprenticeship Description">
      <input
        type="text"
        placeholder="Enter Description"
        value={apprenticeshipDescription}
        onChange={(e) => setApprenticeshipDescription(e.target.value)}
      />
    </CardContainer>
  );
};

export default ApprenticeshipDescription;
