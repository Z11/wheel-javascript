var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "node",
    sources: [
      "src/wheel.js"
    ],
    tests: [
      "test/*-test.js"
    ]
};
