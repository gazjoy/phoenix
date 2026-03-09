const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching data...");

  return fetch("https://cannockswimmingclub.org/wp-json/wp/v2/pages")
    .then((res) => res.json())
    .then((json) => json);
};
