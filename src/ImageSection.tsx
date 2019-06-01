import React from "react";
import ImageInfo from "./types";
import "./image.css";
import classNames from "classnames";

interface Props {
  item: ImageInfo;
  onHandleImageCick: (idx: number) => void;
  idx: number;
}
export default function ImageSection(props: Props) {
  const { item, onHandleImageCick, idx } = props;
  return (
    <div
      className={classNames("photo", {
        photo_front: !item.reverse,
        photo_back: item.reverse,
        photo_center: item.center
      })}
      style={{
        left: item.left,
        top: item.top,
        transform: item.transform
      }}
      onClick={() => onHandleImageCick(idx)}
    >
      <div className="photo_wrap">
        <div className="side side_front">
          <p className="image">
            <img src={`/images/${item.filePath}`} alt="" />
          </p>
          <p className="caption">{item.title}</p>
        </div>
        <div className="side side_back">
          <p className="desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}
