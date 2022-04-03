const range = document.getElementById("range"),
  price = document.getElementById("price");
range.addEventListener("input", (e) => {
  const val = range.value;
  price.textContent = `$${Number(val).toFixed(2)}`;
  // Sliding background
  e.target.style.backgroundSize = ((val - 0) * 100) / (100 - 0) + "% 100%";
});
