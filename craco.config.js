const CracoLessPlugin = require("craco-less");
const path = require("path");
const { getPlugin, pluginByName } = require("@craco/craco");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  //   plugins: [
  //     new TerserPlugin({
  //       sourceMap: false,
  //       terserOptions: {
  //         ecma: undefined,
  //         warnings: false,
  //         parse: {},
  //         compress: {
  //           drop_console: process.env.NODE_ENV === "production",
  //           drop_debugger: false,
  //           pure_funcs:
  //             process.env.NODE_ENV === "production" ? ["console.log"] : "",
  //         },
  //       },
  //     }),
  //   ],
  //   configure: (webpackConfig, { env, paths }) => {
  //       webpackConfig.externals = {
  //         react: "React",
  //         "react-dom": "ReactDOM",
  //         redux: "Redux",
  //       };

  //       cdn = {
  //         js: [
  //           "https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js",
  //           "https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js",
  //           "https://cdn.bootcdn.net/ajax/libs/redux/4.1.0/redux.min.js",
  //         ],
  //         css: [],
  //       };

  //       const { isFound, match } = getPlugin(
  //         webpackConfig,
  //         pluginByName("HtmlWebpackPlugin")
  //       );
  //       if (isFound) {
  //         match.options.cdn = cdn;
  //       }
  //     return webpackConfig;
  //   },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#428BE5",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
