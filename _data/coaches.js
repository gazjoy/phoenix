const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching coaches...");

  return fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/coaches?_embed")
    .then((res) => res.json())
    .then((json) => json);
};
