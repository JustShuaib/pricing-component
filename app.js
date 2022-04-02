const range = document.getElementById("range");
const price = document.getElementById("price");
range.addEventListener("input", () => {
  console.log(range.value);
  price.textContent = `$${range.value}`;
});
