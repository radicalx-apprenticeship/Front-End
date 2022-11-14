import { useEffect } from "react";
import { useState } from "react";
import { CardContainer } from "../../components";

const CompanyLogoCard = () => {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined);
      return;
    }
    setImage(e.target.files[0]);
  };
  useEffect(() => {
    if (!image) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [image]);

  return (
    <CardContainer title="Company Logo & Apprenticeship Title">
      <div className="company-title__container">
        <label htmlFor="image_file">
          {image ? (
            <img
              src={preview}
              alt="company logo"
              className="company-logo image-icon"
            />
          ) : (
            <div className="image-placeholder"></div>
          )}
          <input
            type="file"
            accept="image/*"
            id="image_file"
            onChange={onSelectFile}
          />
        </label>
        <input
          type="text"
          placeholder="Enter Apprenticeship Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </CardContainer>
  );
};

export default CompanyLogoCard;
