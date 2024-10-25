// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate product select options
  const productSelect = document.getElementById("product-name");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Track form submission count using localStorage
  document.querySelector("form").addEventListener("submit", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    localStorage.setItem("reviewCount", ++reviewCount);
  });
  
  // Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent += lastModifiedDate;
