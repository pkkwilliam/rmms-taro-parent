import Taro from "@tarojs/taro";
import P from "./paragraph";
export default class H1 extends P {
  getColor() {
    return "#5F5F5F";
  }

  getClassName() {
    return "at-article__h1";
  }
}
