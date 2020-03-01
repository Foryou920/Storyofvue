// vue.config.js文件被修改后需要重启Vue服务
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/assets/styles"));
  },
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock"
        }
      }
    }
  }
};
