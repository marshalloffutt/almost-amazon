import {addToCart} from './cart.js';

const book = [
{
title: "One Hundred Years of Solitude",
author: "Gabriel García Márquez",
img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
price: "$11.99"
}
];

const getPrice = () => {
    return book[0].price;
};

const addToCartButton = document.getElementById('addToCartBtn');

addToCartButton.addEventListener('click', function (e) {
addToCartButtonEvent();
});

const addToCartButtonEvent = () => {
addToCart();
}

export { getPrice }