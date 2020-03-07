const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  // エントリポイントのファイル
  entry: "./src/main.js",
  output: {
    // 出力先のディレクトリ
    path: path.resolve(__dirname, "./public"),
    // 出力ファイル名
    filename: "bundle.js"
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".vue", ".js"],
    alias: {
      // vueのディレクトリ指定っぽい？
      vue$: "vue/dist/vue.js"
    }
  },
  devServer: {
    // webpackの扱わないファイル(HTMLや画像など)が入っているディレクトリ
    // contentBase: path.resolve(__dirname, "public")
  }
};
