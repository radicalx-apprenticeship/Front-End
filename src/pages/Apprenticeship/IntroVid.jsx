import { useState } from "react";
import { CardContainer } from "../../components";
import DocumentUpload from "../../assets/document-upload.svg";
const IntroVid = () => {
  const [video, setVideo] = useState(null);
  return (
    <CardContainer title="Introduce yourself, your company, and what you're building.">
      <label htmlFor="video" className="video-container">
        {video ? (
          <div>{video.name}</div>
        ) : (
          <>
            <p>Drag n drop to upload your video</p>
            <img src={DocumentUpload} alt="document upload" />
          </>
        )}

        <input
          type="file"
          id="video"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
        />
      </label>
    </CardContainer>
  );
};

export default IntroVid;
