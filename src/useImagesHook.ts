import { useState, useCallback, useEffect } from "react";
import reRenderImages from "./utils";
import ImageInfo from "./types";
import Axios from "axios";

/**
 * 图片操作hooks
 * 定义了返回值的类型，之前的bug解决了
 */
export default function useImagesHook(): [
  ImageInfo[],
  (index: number, curImages?: ImageInfo[]) => void
] {
  const [images, setImages] = useState<ImageInfo[]>([]);

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
