import ImageInfo, { Range } from "./types";

/**
 * 重新排布图片
 * @param images
 * @param index
 */
export default function reRenderImages(
  images: ImageInfo[],
  index: number
): ImageInfo[] {
  if (index < 0 || index > images.length) {
    return images;
  }

  const centerImg = images[index];
  if (centerImg.center) {
    return [
      ...images.slice(0, index),
      { ...centerImg, reverse: !centerImg.reverse, center: true },
      ...images.slice(index + 1)
    ];
  } else {
    const ranges = range();
    images.splice(index, 1);
    const ImagesLeft = images
      .splice(0, Math.floor(images.length / 2))
      .map(item => ({
        ...item,
        reverse: false,
        center: false,
        left: random(ranges.left.x),
        top: random(ranges.left.y),
        transform: `rotate(${random([-45, 45])}deg) scale(1)`
      }));
    const ImagesRight = images.map(item => ({
      ...item,
      reverse: false,
      center: false,
      left: random(ranges.right.x),
      top: random(ranges.right.y),
      transform: `rotate(${random([-45, 45])}deg) scale(1)`
    }));

    const temp = [...ImagesLeft, ...ImagesRight];
    return [
      ...temp.slice(0, index),
      {
        ...centerImg,
        center: true,
        left: undefined,
        top: undefined,
        transform: undefined
      },
      ...temp.slice(index)
    ];
  }
}

/**
 *随机生成数值
 *
 * @param {number[]} range
 * @returns
 */
function random(range: number[]) {
  var max = Math.max(range[0], range[1]);
  var min = Math.min(range[0], range[1]);
  var diff = max - min;
  return Math.ceil(Math.random() * diff + min);
}

/**
 *计算左右分区的范围
 *
 * @returns
 */
function range() {
  const wrap = {
    w: document.body.clientWidth,
    h: 600
  };
  const photo = {
    w: 260,
    h: 320
  };

  const range: Range = {
    left: { x: [], y: [] },
    right: { x: [], y: [] },
    wrap: wrap,
    photo: photo
  };

  range.left.x = [0, wrap.w / 2 - (photo.w * 3) / 2];
  range.left.y = [0, wrap.h - photo.h / 2];
  range.right.x = [wrap.w / 2 + photo.w / 2, wrap.w - photo.w / 2];
  range.right.y = range.left.y;
  return range;
}
