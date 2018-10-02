import {addToCart} from './components/cart.js';
import {addToCartButtonEvent} from './components/store.js';

const initializeApp = () => {
    addToCartButtonEvent();
    addToCart();
};

initializeApp();