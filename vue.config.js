module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://cloud.greyl.dev:3002",
      },
    },
  },
};
