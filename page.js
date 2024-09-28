// Sample market data (can come from a database or API)
const markets = {
  marketXYZ: {
    name: "Market XYZ",
    description:
      "A community-focused farmer's market offering fresh, local produce and handmade crafts.",
    images: ["img/market1.jpg", "img/market2.jpg", "img/market3.jpg"],
    links: {
      facebook: "https://facebook.com/marketxyz",
      instagram: "https://instagram.com/marketxyz",
      website: "https://marketxyz.com",
    },
  },
  // You can add more markets here
};

// Function to update the page content based on selected market
function loadMarketData(marketId) {
  const market = markets[marketId];

  // Update the market name
  document.getElementById("marketName").innerText = market.name;

  // Update the market images
  const images = document.querySelectorAll(".market-photos img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = market.images[i];
    images[i].alt = `${market.name} Image ${i + 1}`;
  }

  // Update the social media links
  const links = document.querySelectorAll(".market-links ul li a");
  links[0].href = market.links.facebook;
  links[1].href = market.links.instagram;
  links[2].href = market.links.website;
}

// Load the data for marketXYZ by default
window.onload = function () {
  loadMarketData("marketXYZ");
};
