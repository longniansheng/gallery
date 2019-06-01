import { useState, useCallback, useEffect } from "react";
import reRenderImages from "./utils";
import ImageInfo from "./types";
import Axios from "axios";

export default function useImagesHook() {
  const [images = [], setImages] = useState<Array<ImageInfo>>();

  const onHandleImageClick = useCallback(
    (index: number, curImages?: ImageInfo[]) => {
      const newImages = reRenderImages(curImages || images, index);
      setImages(newImages);
    },
    [images]
  );

  const fetchImages = () => {
    return Axios.get<ImageInfo[]>("/images.json").then((result: any) => {
      const images = result.data.map((item: any) => ({
        ...item,
        center: false,
        reverse: false
      }));
      return images;
    });
  };

  useEffect(() => {
    fetchImages().then(images => {
      const idx = Math.floor(Math.random() * images.length);
      onHandleImageClick(idx, images);
    });
  }, []);

  return [images, onHandleImageClick];
}
