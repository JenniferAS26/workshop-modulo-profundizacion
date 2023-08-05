import { getData } from '../services/api.js';

const homeSection = async () => {
  const products = await getData();
  const homeContainer = document.querySelector('.home-container');
  homeContainer.innerHTML = '';

  const shopContainer = document.createElement('div');
  shopContainer.className = 'shop__container grid';

  products.forEach(product => {
    const shopItems = document.createElement('div');

    if (product.category == 'Women') {
      shopItems.className = 'shop__items grid women';
    } else if (product.category == 'Men'){
      shopItems.className = 'shop__items grid men';
    }
  
    const link = document.createElement('a');
    link.href = `#/${product.id}`;
    link.className = 'shop__link button-details';

    const shopContent = document.createElement('div');
    shopContent.className = 'shop__content';

    const img = document.createElement('img');
    img.src = product.images[0];
    img.alt = product.name;
    img.className = 'shop__img';

    const shopPrices = document.createElement('div');
    shopPrices.className = 'shop__prices';

    const title = document.createElement('h3');
    title.className = 'shop__title';
    title.textContent = product.name;

    const price = document.createElement('span');
    price.className = 'shop__price';
    price.textContent = `$${product.price}.00`;

    shopPrices.appendChild(title);
    shopPrices.appendChild(price);

    shopContent.appendChild(img);
    shopContent.appendChild(shopPrices);

    link.appendChild(shopContent);

    shopItems.appendChild(link);
    shopContainer.appendChild(shopItems);
  });

  homeContainer.appendChild(shopContainer);

  const redirectToProductDetails = (productId) => {
    const url = `index.html?id=${productId}`;
    window.location.href = url;
  };

  homeContainer.addEventListener('click', (event) => {
    const target = event.target.closest('.button-details');
    if (target) {
      event.preventDefault();
      const href = target.getAttribute('href');
      const productId = href ? href.split('/')[1] : null;
      if (productId) {
        redirectToProductDetails(productId);
      }
    }
  });
};
// show modal cart shopping
const cartIcon = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const orderContainer = document.querySelector('.cart-modal__checkout-container');

cartIcon.addEventListener('click', () => {
  cartModal.classList.toggle('show');
    orderContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
});


homeSection();
