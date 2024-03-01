let cart = [{
    productId: 'abcd123',
    quantity: 1
}, {
    productId: 'jklm567',
    quantity: 1
}, {
    productId: 'xyz89',
    quantity: 1
}];

let productId = '';

cart.forEach((item) => {
    if(item.productId === 'abcd123') {
        productId = item.productId
    }
});

let newCart = [];

function removeCartItem(productId) {
    cart.forEach((item) => {
        if(productId !== item.productId){
            newCart.push(item);
        }
    });
}

removeCartItem(productId);

cart = newCart;




// console.log(productId);

// console.log(cart);

console.log(typeof new Promise((resolve, reject) => {
    
}));