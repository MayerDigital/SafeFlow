import { products } from "./products.js";

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function formatPrice(value) {
  return (
    new Intl.NumberFormat("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value) + " €"
  );
}

function getDiscountRate(quantity) {
  if (quantity >= 100) return 0.2;
  if (quantity >= 50) return 0.15;
  if (quantity >= 20) return 0.1;
  if (quantity >= 10) return 0.075;
  if (quantity >= 5) return 0.05;
  return 0;
}

function formatDiscount(rate) {
  if (rate === 0.075) return "7,5 %";
  return `${new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(rate * 100)} %`;
}

function createOptionsHtml(options) {
  return options
    .map((option, index) => `<option value="${index}">${option.label}</option>`)
    .join("");
}

function createPriceBox(product) {
  const unitPrice = product.options[0]?.price ?? 0;
  const quantity = 1;
  const discountRate = getDiscountRate(quantity);
  const discountedUnitPrice = unitPrice * (1 - discountRate);
  const totalPrice = discountedUnitPrice * quantity;

  return `
    <div class="price-box" data-box="${product.id}">
      <div class="price-line">
        <span class="price-label">Einzelpreis</span>
        <strong data-unit-price="${product.id}">${formatPrice(unitPrice)}</strong>
      </div>
      <div class="price-line">
        <span class="price-label">Mengenrabatt</span>
        <strong data-discount="${product.id}">${formatDiscount(discountRate)}</strong>
      </div>
      <div class="price-line">
        <span class="price-label">Preis je Stück nach Rabatt</span>
        <strong data-discounted-unit-price="${product.id}">${formatPrice(discountedUnitPrice)}</strong>
      </div>
      <div class="price-line total-line">
        <span class="price-label">Gesamtpreis</span>
        <strong data-total-price="${product.id}">${formatPrice(totalPrice)}</strong>
      </div>
      <span class="price-note">netto / ohne Mehrwertsteuer</span>
    </div>
  `;
}

function createCard(product) {
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

      ${createPriceBox(product)}

      <select data-product-id="${product.id}" class="option-select">
        ${createOptionsHtml(product.options)}
      </select>

      <div class="qty-wrap">
        <label class="qty-label" for="qty-${product.id}">Menge</label>
        <input
          id="qty-${product.id}"
          class="qty-input"
          type="number"
          min="1"
          step="1"
          value="1"
          data-qty-product-id="${product.id}"
        />
        <span class="discount-hint">
          Rabatt: ab 5 Stk. 5 %, ab 10 Stk. 7,5 %, ab 20 Stk. 10 %, ab 50 Stk. 15 %, ab 100 Stk. 20 %
        </span>
      </div>

      <button class="select-btn" type="button">Auswählen</button>
    </article>
  `;
}

function updatePriceDisplay(productId, filteredProducts) {
  const product = filteredProducts.find((item) => item.id === productId);
  if (!product) return;

  const select = productGrid.querySelector(`select[data-product-id="${productId}"]`);
  const qtyInput = productGrid.querySelector(`input[data-qty-product-id="${productId}"]`);
  if (!select || !qtyInput) return;

  const selectedIndex = Number(select.value);
  const option = product.options[selectedIndex];
  if (!option) return;

  const quantity = Math.max(1, Number(qtyInput.value) || 1);
  const discountRate = getDiscountRate(quantity);
  const discountedUnitPrice = option.price * (1 - discountRate);
  const totalPrice = discountedUnitPrice * quantity;

  const unitPriceElement = productGrid.querySelector(`[data-unit-price="${productId}"]`);
  const discountElement = productGrid.querySelector(`[data-discount="${productId}"]`);
  const discountedUnitPriceElement = productGrid.querySelector(
    `[data-discounted-unit-price="${productId}"]`
  );
  const totalPriceElement = productGrid.querySelector(`[data-total-price="${productId}"]`);

  if (unitPriceElement) {
    unitPriceElement.textContent = formatPrice(option.price);
  }

  if (discountElement) {
    discountElement.textContent = formatDiscount(discountRate);
  }

  if (discountedUnitPriceElement) {
    discountedUnitPriceElement.textContent = formatPrice(discountedUnitPrice);
  }

  if (totalPriceElement) {
    totalPriceElement.textContent = formatPrice(totalPrice);
  }
}

function bindCardEvents(filteredProducts) {
  const selects = productGrid.querySelectorAll(".option-select");
  const qtyInputs = productGrid.querySelectorAll(".qty-input");

  selects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const productId = event.target.dataset.productId;
      updatePriceDisplay(productId, filteredProducts);
    });
  });

  qtyInputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      const productId = event.target.dataset.qtyProductId;
      updatePriceDisplay(productId, filteredProducts);
    });

    input.addEventListener("change", (event) => {
      const value = Math.max(1, Number(event.target.value) || 1);
      event.target.value = value;
      const productId = event.target.dataset.qtyProductId;
      updatePriceDisplay(productId, filteredProducts);
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
  bindCardEvents(filteredProducts);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

renderProducts();
