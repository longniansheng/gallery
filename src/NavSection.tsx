import React from "react";
import ImageInfo from "./types";
import classnames from "classnames";
import "./image.css";

interface Props {
  items: ImageInfo[];
  onHandleImageCick: (idx: number) => void;
}
export default function NavSection(props: Props) {
  const { items, onHandleImageCick } = props;
  return (
    <div className="nav">
      {items.map((item, idx) => {
        return (
          <span
            className={classnames("i", {
              i_current: item.center,
              i_back: item.reverse
            })}
            onClick={() => onHandleImageCick(idx)}
          />
        );
      })}
    </div>
  );
}
