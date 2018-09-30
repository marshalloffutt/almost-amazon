import {printToDom} from '../helpers/util.js';

const book = [
    {
        title: "One Hundred Years of Solitude",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
        price: 10.00
    }
];

const bookCardBuilder = () => {
    let domString = '';
    domString += `<div class="card" style="width: 18rem;">`;
    domString +=    `<img class="card-img-top" src="${book[0].img}" alt="Cover art for One Hundred Years of Solitude">`
    domString +=    `<div class="card-body">`;
    domString +=        `<h5 class="card-title">${book[0].title}</h5>"/>`;
    domString +=        `<p class="card-text">Almost Amazon Price: ${book[0].price}</p>`;
    domString +=        `<button type="submit" class="btn btn-primary" id="addToCartBtn">Add to Cart</a>`;
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom(domString, 'book-card');
};

export {bookCardBuilder}