import { products } from "./products.js";

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function formatPrice(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function createOptionsHtml(options) {
  return options
    .map((option, index) => {
      return `<option value="${index}">${option.label}</option>`;
    })
    .join("");
}

function createCard(product) {
  const defaultPrice = product.options[0]?.price ?? 0;

  return `
    <article class="card">
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${product.image}"
          alt="${product.title}"
          loading="lazy"
        />
      </div>

      <h3>${product.title}</h3>
      <p class="card-description">${product.description}</p>

      <div class="price-box">
        <span class="price-label">Preis</span>
        <span class="price-value" data-price="${product.id}">
          ${formatPrice(defaultPrice)}
        </span>
      </div>

      <select data-product-id="${product.id}">
        ${createOptionsHtml(product.options)}
      </select>

      <button class="select-btn" type="button">
        Auswählen
      </button>
    </article>
  `;
}

function bindPriceUpdates(filteredProducts) {
  const selects = productGrid.querySelectorAll("select");

  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      const selectedIndex = Number(event.target.value);

      const product = filteredProducts.find((item) => item.id === productId);
      if (!product) return;

      const selectedOption = product.options[selectedIndex];
      const priceElement = productGrid.querySelector(`[data-price="${productId}"]`);
      if (!selectedOption || !priceElement) return;

      priceElement.textContent = formatPrice(selectedOption.price);
    });
  });
}

function renderProducts(category = "Alle") {
  const filteredProducts =
    category === "Alle"
      ? products
      : products.filter((product) => product.category === category);

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state">
        Keine Produkte in dieser Kategorie gefunden.
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(createCard).join("");
  bindPriceUpdates(filteredProducts);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

renderProducts();
