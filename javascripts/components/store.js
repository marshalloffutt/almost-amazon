const book = [
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg/220px-Cien_a%C3%B1os_de_soledad_%28book_cover%2C_1967%29.jpg",
        price: 10.00
    }
];

const createBookCard = () => {
    let domString = '';
    domString += ``;
    for(i = 0; i < book.length; i++) {
        domString += `<div class="card" style="width: 18rem;">`;
        domString +=    `<img class="card-img-top" src="${book[i].img}" alt="Cover art for One Hundred Years of Solitude">`
        domString +=    `<div class="card-body">`;
        domString +=        `<h5 class="card-title">${book[i].title}</h5>"/>`;
        domString +=        `<p class="card-text">Almost Amazon Price: ${book[i].price}</p>`;
        domString +=        `<button type="submit" class="btn btn-primary addToCart">Add to Cart</a>`;
        domString +=    `</div>`;
        domString += `</div>`;
      }
      printToDom(domString, 'book-card');
    }