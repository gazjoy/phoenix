module.exports = async function () {
  console.log("Fetching about page...");
  const res = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/pages?_embed&slug=about")
  return await res.json();
};
