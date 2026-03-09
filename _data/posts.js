const fetch = require("node-fetch");

module.exports = async function () {
  console.log("Fetching data...");

  return fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/posts?_embed")
    .then((res) => res.json())
    .then((json) => json);
};
