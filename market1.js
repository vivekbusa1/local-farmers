const market = document.getElementById("markets");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

const data = [
  {
    name: "Floating market",
    address: "Rajkot",
    hours: "Sat 8am - 1pm",
    Produce: ["Fresh fruits"],
  },
  {
    name: "abc market",
    address: "Jaypur",
    hours: "Sat 8am - 1pm",
    Produce: ["Fresh fruits", "Vegetables"],
  },
  {
    name: "bcd market",
    address: "Bhavnagar",
    hours: "Sat 8am - 1pm",
    Produce: ["Fresh fruits", "Handmade goods"],
  },
  {
    name: "Fldfdoating market",
    address: "Tokyo",
    hours: "Sat 8am - 1pm",
    Produce: ["Handmade goods"],
  },
];

var filteredData = data;

function star(id) {
  const element = document.getElementById(id);
  element.classList.toggle("fill-star");
}

function Render() {
  market.innerHTML = "";
  filteredData.forEach((item, index) => {
    market.innerHTML += `
          <li class="market-item">
          <p><strong>name:</strong>${item.name}</p>
          <p><strong>Address:</strong>${item.address}</p>
          <p><strong>Hours:</strong>${item.hours}</p>
          <p><strong>Produce:</strong> ${item.Produce}</p>
          <img src=./img/star.png
          style=height:20px;float:right;margin-top:-150px id='star${index}' onclick="star('star${index}')">
          </li> 
            `;
  });
}

function Search() {
  if (search.value !== "") {
    console.log(search.value);
    filteredData = data.filter((item) => {
      return item.address.toLowerCase().includes(search.value.toLowerCase());
    });
    console.log(filteredData);
  } else {
    filteredData = data;
  }

  if (filter.value) {
    filteredData = filteredData.filter((item) => {
      return item.Produce.includes(filter.value);
    });
  }

  Render();
}

Render();
