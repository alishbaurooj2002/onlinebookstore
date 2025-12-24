// Assume cart is stored in localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");

// Function to render cart items
function renderCart() {
    cartContainer.innerHTML = ""; // Clear existing items

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <div class="cart-details">
                <h4 class="cart-title">${item.title}</h4>
                <p class="cart-price">Rs. ${item.price}</p>
                <div class="quantity-controls">
                    <button class="qty-btn minus">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn plus">+</button>
                </div>
                <button class="remove-btn">Remove</button>
            </div>
            <div class="cart-image">
                <img src="${item.image}" alt="${item.title}">
            </div>
        `;

        // Event listeners for quantity buttons and remove
        const minusBtn = cartItem.querySelector(".minus");
        const plusBtn = cartItem.querySelector(".plus");
        const removeBtn = cartItem.querySelector(".remove-btn");
        const quantitySpan = cartItem.querySelector(".quantity");

        minusBtn.addEventListener("click", () => {
            if (item.quantity > 1) {
                item.quantity--;
                quantitySpan.textContent = item.quantity;
                saveCart();
            }
        });

        plusBtn.addEventListener("click", () => {
            item.quantity++;
            quantitySpan.textContent = item.quantity;
            saveCart();
        });

        removeBtn.addEventListener("click", () => {
            cart.splice(index, 1);
            saveCart();
            renderCart();
        });

        cartContainer.appendChild(cartItem);
    });
}

// Save updated cart to localStorage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Initial render
renderCart();
