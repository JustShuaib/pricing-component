const range = document.getElementById("range"),
  switchBtn = document.getElementById("switch"),
  price = document.getElementById("price");
range.addEventListener("input", (e) => {
  const val = range.value;
  price.textContent = `$${Number(val).toFixed(2)}`;
  // Sliding background
  e.target.style.backgroundSize = ((val - 0) * 100) / (100 - 0) + "% 100%";
});
//? ((val - 0) * 100) / (100 - 0)% 100%
switchBtn.addEventListener("click", (e) => {
  console.log(e.target.checked);
});
