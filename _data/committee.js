module.exports = async function () {
    console.log("Fetching committee page...");
    
    const pageResponse = await fetch("https://test.cannockswimmingclub.org/wp-json/wp/v2/pages?_embed&slug=committee");
    const page = await pageResponse.json();
    
    console.log("Committee page fetched:", page);
    
    return page;  // Return the array directly, NOT { page: page }
};
