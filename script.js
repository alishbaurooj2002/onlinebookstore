let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function (event) {

  /* ADD TO CART */
  if (event.target.classList.contains("add-to-cart")) {

    const bookCard = event.target.closest(".book-card");

    const title = bookCard.querySelector(".book-title").innerText;
    const author = bookCard.querySelector(".book-author").innerText;
    const priceText = bookCard.querySelector(".book-price").innerText;
    const image = bookCard.querySelector(".book-image").src;
    const price = parseInt(priceText.replace(/[^\d]/g, ""));

    const existingBook = cart.find(item => item.title === title);

    if (existingBook) {
      existingBook.quantity += 1;
    } else {
      cart.push({
        title,
        author,
        price,
        image,
        quantity: 1
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Book added to cart");
  }
});
const searchInput = document.querySelector('.search-input');
const sections = document.querySelectorAll('section');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    sections.forEach(section => {
        const bookCards = section.querySelectorAll('.book-card');
        let anyVisible = false;

        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const author = card.querySelector('.book-author').textContent.toLowerCase();

            if (!query || title.includes(query) || author.includes(query)) {
                card.style.display = 'block';  // show matching card
                anyVisible = true;
            } else {
                card.style.display = 'none';   // hide non-matching card
            }
        });

        // Show section if any card is visible, otherwise hide
        section.style.display = anyVisible ? 'block' : 'none';
    });
});
