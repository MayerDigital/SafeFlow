import { products } from "./products.js";

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll("#filterButtons button");

function renderProducts(category = "Alle") {
  const filtered =
    category === "Alle"
      ? products
      : products.filter((p) => p.category === category);

  productGrid.innerHTML = filtered
    .map((p) => {
      return `
      <div class="card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>

        <select class="size-select">
          ${p.sizes
            .map(
              (s) => `<option>${s.label}</option>`
            )
            .join("")}
        </select>

        <button class="buy-btn">Auswählen</button>
      </div>
    `;
    })
    .join("");
}

// FILTER
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    renderProducts(btn.dataset.category);
  });
});

// START
renderProducts();
