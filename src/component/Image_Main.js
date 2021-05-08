import React, { useState, useEffect } from "react";
import "./Image_Main.css";

const ImageMain = () => {
  const [images, setImages] = useState([
    {
      id: "",
      description: "",
      alt_description: "",
      urls: { regular: "" },
    },
  ]);

  const fetchImage = async () => {
    try {
      const fetchReq = await fetch(
        "https://api.unsplash.com/photos/?query=london&client_id=CoNqiGjtLWqTrvlcpSBbuYUOeoB_ObNM3NOcR62CmfI"
      );
      const fetchJson = await fetchReq.json();
      setImages(fetchJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="ImageMain">
      <h1>Image Gallery</h1>
      <div className="image-container">
        {images.map((image) => (
          <div className="flip-image" key={image.id}>
            <div className="flip-inner">
              <div className="flip-front">
                <img src={image.urls.regular} alt={image.alt_description} />
              </div>
              <div className="flip-back">
                {image.description ? image.description : image.alt_description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMain;
