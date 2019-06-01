import React from "react";
import styled from "styled-components";
import useImagesHook from "./useImagesHook";
import ImageSection from "./ImageSection";
import ImageInfo from "./types";
import NavSection from "./NavSection";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  position: absolute;
  top: 50%;
  margin-top: -300px;
  background-color: #333;
  overflow: hidden;
  perspective: 800px;
`;

function App() {
  const [images, onHandleImageCick] = useImagesHook();
  // TODO: 不强转就是报错，莫名其妙，先这样，回头排查
  const _images = images as ImageInfo[];
  const _onHandleImageCick = onHandleImageCick as (idx: number) => void;
  return (
    <Wrapper>
      {_images.map((item, idx) => {
        return (
          <React.Fragment>
            <ImageSection
              key={idx}
              idx={idx}
              item={item}
              onHandleImageCick={_onHandleImageCick}
            />
            <NavSection
              items={_images}
              onHandleImageCick={_onHandleImageCick}
            />
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default App;
