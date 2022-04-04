const range = document.getElementById("range"),
  switchBtn = document.getElementById("switch"),
  price = document.getElementById("price"),
  pageViews = document.getElementById("page-views"),
  discountText = document.getElementById("discount");

window.addEventListener("load", () => {
  if (window.innerWidth >= 800) {
    discountText.textContent = "25% discount";
  }
});
let text = 16,
  views;
range.addEventListener("input", (e) => {
  const val = range.value,
    min = range.min,
    max = range.max,
    isChecked = switchBtn.checked;

  e.target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";

  if (val >= 8 && val < 12) {
    text = 8;
    views = "10K";
  } else if (val >= 12 && val < 16) {
    text = 12;
    views = "50K";
  } else if (val >= 16 && val < 24) {
    text = 16;
    views = "100K";
  } else if (val >= 24 && val < 36) {
    text = 24;
    views = "500K";
  } else {
    text = 36;
    views = "1M";
  }
  const discount = 0.25 * text,
    discountedPrice = text - discount;

  price.textContent = `$${(isChecked ? discountedPrice : text).toFixed(2)}`;
  pageViews.textContent = views;
});

switchBtn.addEventListener("change", (e) => {
  const isChecked = e.target.checked;
  const discount = 0.25 * text,
    discountedPrice = text - discount;
  price.textContent = `$${(isChecked ? discountedPrice : text).toFixed(2)}`;
});
