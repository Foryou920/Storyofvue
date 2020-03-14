// 定义一个默认城市
let defaultcity = "上海";
// localStorage使用需要搭配try-catch，因为有些浏览器可能关闭了localStorage，例如隐身模式
try {
  if (localStorage.city) {
    defaultcity = localStorage.city;
  }
} catch (e) {}

export default {
  // city显示默认城市
  city: defaultcity
};
