import React from "react";
import useImagesHook from "./useImagesHook";
import ImageSection from "./ImageSection";
import NavSection from "./NavSection";
import "./image.css";

function App() {
  const [images, onHandleImageClick] = useImagesHook();

  return (
    <div className="wrap">
      {images.map((item, idx) => {
        return (
          <React.Fragment>
            <ImageSection
              key={idx}
              idx={idx}
              item={item}
              onHandleImageCick={onHandleImageClick}
            />
            <NavSection items={images} onHandleImageCick={onHandleImageClick} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
