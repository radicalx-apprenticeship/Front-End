import { useState } from "react";
import { CardContainer } from "../../components";
import DocumentUpload from "../../assets/document-upload.svg";
import Close from "../../assets/close.svg";
const IntroVid = () => {
  const [videos, setVideos] = useState([]);
  const onDelete = (index) => {
    const newVideos = videos.filter((_, i) => i !== index);
    setVideos(newVideos);
  };
  return (
    <CardContainer title="Introduce yourself, your company, and what you're building.">
      <label htmlFor="video" className="video-container">
        <p>Drag n drop to upload your video</p>
        <img src={DocumentUpload} alt="document upload" />

        <input
          type="file"
          id="video"
          accept="video/*"
          onChange={(e) => setVideos((prev) => [...prev, e.target.files[0]])}
        />
      </label>
      <div className="video-button-container">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => onDelete(index)}
            className="video-button"
          >
            <p>{video.name}</p>
            <img src={Close} alt="close" />
          </button>
        ))}
      </div>
    </CardContainer>
  );
};

export default IntroVid;
