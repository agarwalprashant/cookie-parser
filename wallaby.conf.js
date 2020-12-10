module.exports = function () {
  return {
    files: ["index.js"],

    tests: ["test/**/*.js"],
    env: {
      type: "node",
    },

    setup: function (wallaby) {
      var mocha = wallaby.testFramework;
      mocha.ui("tdd");
      // etc.
    },
  };
};
