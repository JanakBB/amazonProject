//how to remove delet cart item from cart.

let cart = [{
    productId: 'abcd123',
    quantity: 2
}, {
    productId: 'xyz456',
    quantity: 1
}];

let productId = '';

cart.forEach((item) => {
    // console.log(item.productId);
    if(item.productId === 'abcd123') {
        productId = item.productId
    }
});

const newCart = [];

function removeCartItem(productId) {
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
};

removeCartItem(productId);

cart = newCart;
console.log(cart);
// console.log(productId);