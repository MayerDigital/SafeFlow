import { products } from "./products.js";
import { icons } from "./icons.js";

const productGrid = document.getElementById("productGrid");
const iconGrid = document.getElementById("iconGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProducts() {
  productGrid.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
    </div>
  `).join("");
}

function renderIcons(category = "Alle") {
  const filtered = category === "Alle"
    ? icons
    : icons.filter(i => i.category === category);

  iconGrid.innerHTML = filtered.map(i => `
    <div class="card">
      <img src="${i.image}">
      <h3>${i.title}</h3>
    </div>
  `).join("");
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderIcons(btn.dataset.category);
  });
});

renderProducts();
renderIcons();