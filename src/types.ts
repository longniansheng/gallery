/**
 *图片信息
 *
 * @export
 * @interface ImageInfo
 */
export default interface ImageInfo {
  /**
   *图片标题
   *
   * @type {string}
   * @memberof ImageInfo
   */
  title: string;
  /**
   *图片路径
   *
   * @type {string}
   * @memberof ImageInfo
   */
  filePath: string;
  /**
   *描述信息
   *
   * @type {string}
   * @memberof ImageInfo
   */
  desc?: string;
  /**
   *是否居中
   *
   * @type {boolean}
   * @memberof ImageInfo
   */
  center?: boolean;
  /**
   *是否翻转
   *
   * @type {boolean}
   * @memberof ImageInfo
   */
  reverse?: boolean;
  /**
   *翻转动作
   *
   * @type {string}
   * @memberof ImageInfo
   */
  transform?: string;
  /**
   *水平方向位移
   *
   * @type {number}
   * @memberof ImageInfo
   */
  left?: number;
  /**
   *垂直方向位移
   *
   * @type {number}
   * @memberof ImageInfo
   */
  top?: number;
}

export interface Range {
  /**
   *左侧区域
   *
   * @type {{ x: number[]; y: number[] }}
   * @memberof Range
   */
  left: { x: number[]; y: number[] };
  /**
   *右侧区域
   *
   * @type {{ x: []; y: [] }}
   * @memberof Range
   */
  right: { x: number[]; y: number[] };
  /**
   *幕布宽高
   *
   * @type {{ w: number; h: number }}
   * @memberof Range
   */
  wrap: { w: number; h: number };
  /**
   *图片宽高
   *
   * @type {{ w: number; h: number }}
   * @memberof Range
   */
  photo: { w: number; h: number };
}
