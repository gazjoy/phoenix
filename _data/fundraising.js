const fetch = require("node-fetch");

module.exports = async function () {
  // console.log("Fetching data...");

  // return fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/fundraiser?_embed")
  //   .then((res) => res.json())
  //   .then((json) => json);

    console.log("Fetching fundraising page and fundraisers...");

  // Fetch the about page (or later, the fundraising page)
  const pageResponse = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/pages?_embed&slug=fundraising");
  const page = await pageResponse.json();

  // Fetch the fundraisers
  const fundraisersResponse = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/fundraiser?_embed");
  const fundraisers = await fundraisersResponse.json();

  return {
    page: page,  // Array with the page object
    fundraisers: fundraisers  // Array with fundraiser objects
  };
};
