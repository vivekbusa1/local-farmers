let map;
let markets = [
    {
        name: "Downtown Farmers Market",
        location: { lat: 40.712776, lng: -74.005974 },
        address: "123 Main St, New York, NY",
        hours: "8 AM - 2 PM",
        products: "Fruits, Vegetables, Dairy",
        link: "https://example.com"
    },
    {
        name: "Greenfield Farmers Market",
        location: { lat: 40.712482, lng: -74.013240 },
        address: "456 Park Ave, New York, NY",
        hours: "9 AM - 1 PM",
        products: "Handmade Goods, Organic Vegetables",
        link: "https://example.com"
    }
];

function initMap() {
    // Initialize map centered at a default location
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.712776, lng: -74.005974 },
        zoom: 12
    });

    // Display markers for all markets
    markets.forEach(market => {
        let marker = new google.maps.Marker({
            position: market.location,
            map: map,
            title: market.name
        });

        // Info window for each market
        let infoWindow = new google.maps.InfoWindow({
            content: `<h3>${market.name}</h3>
                      <p><strong>Address:</strong> ${market.address}</p>
                      <p><strong>Hours:</strong> ${market.hours}</p>
                      <p><strong>Products:</strong> ${market.products}</p>
                      <a href="${market.link}" target="_blank">Visit Website</a>`
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });

    // Load market list
    loadMarketList();
}

function loadMarketList() {
    const marketListElement = document.getElementById('market-list');
    markets.forEach(market => {
        let marketElement = document.createElement('div');
        marketElement.classList.add('market');
        marketElement.innerHTML = `
            <h3>${market.name}</h3>
            <p><strong>Address:</strong> ${market.address}</p>
            <p><strong>Hours:</strong> ${market.hours}</p>
            <p><strong>Products:</strong> ${market.products}</p>
            <a href="${market.link}" target="_blank">Visit Website</a>
        `;
        marketListElement.appendChild(marketElement);
    });
}

function findMarkets() {
    let searchInput = document.getElementById('location-search').value;
    // For demonstration, we assume any input centers the map at NYC
    if (searchInput) {
        map.setCenter({ lat: 40.712776, lng: -74.005974 });
    }
}