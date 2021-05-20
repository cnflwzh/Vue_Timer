module.exports = {
  //路径前缀
  publicPath: "./",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: (config) => {
    //忽略的打包文件
    config.externals({
    });
  },
};
