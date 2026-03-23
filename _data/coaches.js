module.exports = async function () {
  console.log("Fetching coaches...");
  const res = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/coaches?_embed")
  return await res.json();
};
