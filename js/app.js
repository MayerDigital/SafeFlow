import { products } from "./products.js";

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll("#filterButtons button");

function formatPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(price);
}

function createSizeOptions(sizes) {
  return sizes
    .map((size, index) => {
      return `
        <option value="${index}">
          ${size.label} – ${formatPrice(size.price)}
        </option>
      `;
    })
    .join("");
}

function renderProducts(category = "Alle") {
  const filteredProducts =
    category === "Alle"
      ? products
      : products.filter((product) => product.category === category);

  if (!filteredProducts.length) {
    productGrid.innerHTML = `<p>Keine Produkte gefunden.</p>`;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const firstPrice = product.sizes?.length ? formatPrice(product.sizes[0].price) : "Preis offen";

      return `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>${product.description}</p>

          <select class="size-select" data-product-id="${product.id}">
            ${createSizeOptions(product.sizes || [])}
          </select>

          <div class="price" id="price-${product.id}">
            ${firstPrice}
          </div>

          <button class="buy-btn" type="button">Auswählen</button>
        </div>
      `;
    })
    .join("");

  bindSizeChangeEvents();
}

function bindSizeChangeEvents() {
  const selects = document.querySelectorAll(".size-select");

  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      const selectedIndex = Number(event.target.value);

      const product = products.find((p) => p.id === productId);
      if (!product || !product.sizes[selectedIndex]) return;

      const priceBox = document.getElementById(`price-${productId}`);
      if (priceBox) {
        priceBox.textContent = formatPrice(product.sizes[selectedIndex].price);
      }
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

renderProducts();
