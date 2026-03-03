const fetch = require("node-fetch");
const fs = require("fs");

const DEBUG_LOG_PATH = "/Users/gareth.joyce/Projects/phoenix/.cursor/debug.log";

module.exports = async function () {
  console.log("Fetching data...");

  return fetch("https://cannockswimmingclub.org/wp-json/wp/v2/posts")
    .then((res) => res.json())
    .then((json) => {
      // #region agent log
      const data = {
        isArray: Array.isArray(json),
        length: Array.isArray(json) ? json.length : 0,
        sampleKeys: Array.isArray(json) && json[0] ? Object.keys(json[0]) : []
      };
      try {
        fs.appendFileSync(
          DEBUG_LOG_PATH,
          JSON.stringify({
            timestamp: Date.now(),
            location: "_data/posts.js",
            message: "posts fetch result",
            hypothesisId: "H2",
            data
          }) + "\n"
        );
      } catch (e) {}
      // #endregion
      return json;
    });
};
