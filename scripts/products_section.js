const products = {
  bestsellers: [
    { name: "Protein Supplement 1", image: "https://t4.ftcdn.net/jpg/04/99/12/15/240_F_499121523_7q7SNzK9iqPmG3ekKlqTkvGqPdOewFxN.jpg", price: "$29.99" },
    { name: "Protein Supplement 2", image: "https://www.transparentlabs.com/cdn/shop/files/8AEFF8D6-F7FD-47C3-986D-A1669D41918A_400x.png?v=1732208183", price: "$34.99" },
    { name: "Pre-Workout 1", image: "https://www.transparentlabs.com/cdn/shop/files/Creatine_HMB_-_Unflavored_1200x1200_a8ae29dc-5d4f-4f48-806f-ce4d7c130dbf_400x.png?v=1725481316", price: "$24.99" },
    { name: "Pre-Workout 2", image: "https://www.transparentlabs.com/cdn/shop/files/Greens_-_Original_1200x1200_93e923c0-a921-4cd8-b5ab-0e8c1fd6fe27_400x.png?v=1725563235", price: "$27.99" },
    { name: "Clothing 1", image: "https://www.transparentlabs.com/cdn/shop/files/Bulk_Black_-_BR_1080x1080_41754d3e-5b04-40a1-aa1f-e8963353451b.png?v=1723781658&width=400", price: "$19.99" },
    { name: "Clothing 2", image: "https://www.transparentlabs.com/cdn/shop/files/Protein_-_PB_Chocolate_Chip_1080x1080_6f117b00-17c1-4fd8-b9e4-2bf33f6f2404_400x.png?v=1723782814", price: "$22.99" },
    { name: "Protein Supplement 3", image: "https://www.transparentlabs.com/cdn/shop/files/VarietyPack_400x.png?v=1709573955", price: "$32.99" },
    { name: "Pre-Workout 3", image: "https://www.transparentlabs.com/cdn/shop/files/47CB87CE-9234-4CE7-95EF-D4EB77BE35D4_400x.png?v=1732213798", price: "$29.99" }
  ],
  protein: [
    { name: "Protein Supplement 1", image: "product1.jpg", price: "$29.99" },
    { name: "Protein Supplement 2", image: "product2.jpg", price: "$34.99" },
    { name: "Protein Supplement 3", image: "product3.jpg", price: "$32.99" },
    { name: "Protein Supplement 4", image: "product4.jpg", price: "$39.99" },
    { name: "Protein Supplement 5", image: "product5.jpg", price: "$29.99" },
    { name: "Protein Supplement 6", image: "product6.jpg", price: "$34.99" },
    { name: "Protein Supplement 7", image: "product7.jpg", price: "$36.99" },
    { name: "Protein Supplement 8", image: "product8.jpg", price: "$40.99" }
  ],
  preworkout: [
    { name: "Pre-Workout 1", image: "product1.jpg", price: "$24.99" },
    { name: "Pre-Workout 2", image: "product2.jpg", price: "$27.99" },
    { name: "Pre-Workout 3", image: "product3.jpg", price: "$29.99" },
    { name: "Pre-Workout 4", image: "product4.jpg", price: "$32.99" },
    { name: "Pre-Workout 5", image: "product5.jpg", price: "$28.99" },
    { name: "Pre-Workout 6", image: "product6.jpg", price: "$30.99" },
    { name: "Pre-Workout 7", image: "product7.jpg", price: "$34.99" },
    { name: "Pre-Workout 8", image: "product8.jpg", price: "$36.99" }
  ],
  clothing: [
    { name: "Clothing 1", image: "https://www.transparentlabs.com/cdn/shop/files/4_400x.png?v=1727973569", price: "$19.99" },
    { name: "Clothing 2", image: "https://www.transparentlabs.com/cdn/shop/files/3_06e49e2d-5841-423a-922c-ff0eb818ff65.png?v=1727973445&width=400", price: "$22.99" },
    { name: "Clothing 3", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/14609855-1055112634554102.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$25.99" },
    { name: "Clothing 4", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/14814623-2045136761913189.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$28.99" },
    { name: "Clothing 5", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/15393917-6355192683134063.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$30.99" },
    { name: "Clothing 6", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/14989647-1335165939233827.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$32.99" },
    { name: "Clothing 7", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/14870969-8125136757322418.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$35.99" },
    { name: "Clothing 8", image: "https://www.myprotein.com/images?url=https://static.thcdn.com/productimg/original/15403302-9325192714513754.jpg&format=webp&auto=avif&width=450&height=450&fit=crop", price: "$38.99" }
  ]
};

function filterProducts(category) {
  // Clear active state on previous buttons
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(button => button.classList.remove("active"));

  // Set the active button
  const activeButton = document.querySelector(`.category-btn[onclick="filterProducts('${category}')"]`);
  activeButton.classList.add("active");

  // Get the products for the selected category
  const productList = products[category];

  // Create product elements dynamically
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = ''; // Clear previous products
  
  productList.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="#shop" class="btn">Shop Now</a>
    `;
    productGrid.appendChild(productItem);
  });
}

// Initialize with 'bestsellers' category on page load
document.addEventListener("DOMContentLoaded", () => {
  filterProducts('bestsellers');
});
