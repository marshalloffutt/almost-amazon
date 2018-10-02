import { printToDom } from '../helpers/util.js';
import { getPrice } from './store.js';

const addToCart = () => {
    let domString = '';
    domString += `<div class="card" style="width: 18rem;">`;
    domString +=    `<div class="card-body">`;
    domString +=    `<h5 class="card-title">Order Summary</h5>`;
    domString +=    `<p class="card-text" id="unitPrice"></p>`;
    domString +=    `<p class="card-text">Shipping: $2.00</p>`;
    domString +=    `<p class="card-text">Tax: $1.71</p>`;
    domString +=    `<p class="card-text total">Order total: $15.70</p>`;
    domString += `</div>`;
    printToDom(domString, 'cart');
    document.getElementById('unitPrice').innerHTML = getPrice();
};


export { addToCart }