module.exports = async function () {
  console.log("Fetching all posts...");
  const res = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/posts?_embed");
  return await res.json();
};
