module.exports = (api) => {
  api.cache.forever();

  return {
    presets: ["@babel/typescript", "@babel/env"],
  };
};
