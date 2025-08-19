function analyzeInput() {
  const input = document.getElementById("userInput").value.trim();
  const analysisOutput = document.getElementById("analysisOutput");
  const productOutput = document.getElementById("productOutput");

  if (!input) {
    analysisOutput.textContent = "⚠️ Please enter some customer details to analyze.";
    productOutput.innerHTML = "";
    return;
  }

  // Dummy logic for analysis
  let analysis = `Analyzing customer details...\n\n`;
  if (input.toLowerCase().includes("shirt")) {
    analysis += "- Customer likes shirts.\n";
  }
  if (input.toLowerCase().includes("jean")) {
    analysis += "- Customer prefers jeans.\n";
  }
  if (input.toLowerCase().includes("blue")) {
    analysis += "- Favorite color: Blue.\n";
  }
  if (analysis === `Analyzing customer details...\n\n`) {
    analysis += "No specific preferences detected. Showing popular picks.";
  }

  analysisOutput.textContent = analysis;

  // Dummy product suggestions
  const products = [
    { name: "Blue Denim Jeans", price: "₹1200", img: "https://via.placeholder.com/200x200?text=Blue+Jeans" },
    { name: "Floral Cotton Shirt", price: "₹899", img: "https://via.placeholder.com/200x200?text=Floral+Shirt" },
    { name: "Casual White T-Shirt", price: "₹499", img: "https://via.placeholder.com/200x200?text=White+Tshirt" }
  ];

  productOutput.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ${p.price}</p>
    `;
    productOutput.appendChild(card);
  });
}
