import { useState } from "react";
import { CardContainer } from "../../components";
const CompanyDescription = () => {
  const [companyDescription, setCompanyDescription] = useState("");
  return (
    <CardContainer title="Company Description">
      <input
        type="text"
        placeholder="Enter Description"
        value={companyDescription}
        onChange={(e) => setCompanyDescription(e.target.value)}
      />
    </CardContainer>
  );
};

export default CompanyDescription;
