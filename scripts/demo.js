//How to add quantity value if product name is same === or repeat.

const cart = [{
    productName: "apple",
    quantity: 1
}];

productName = "apple";

let matchingItem;


cart.forEach((item) => {
    if(productName === item.productName) {
        matchingItem = item;
    }
});

if (matchingItem) {
    matchingItem.quantity += 1;
}

cart.quantity = 5;
console.log(cart.quantity);


cart.forEach((a) => {
    console.log(a.quantity);
});

// const cart = [{
//     productName: "apple",
//     quantity: 1
// }];

// const productName = "apple";

// // Find the matching item
// const matchingItem = cart.find(item => item.productName === productName);

// // If a matching item is found, increment its quantity
// if (matchingItem) {
//     matchingItem.quantity += 1;
// }

// // Log the quantity of each item in the cart
// cart.forEach(item => {
//     console.log(item.quantity); //why undefined
// });