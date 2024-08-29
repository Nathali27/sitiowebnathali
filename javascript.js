function orderItem(itemName) {
    alert('Has pedido ' + itemName + '. Gracias por tu compra.');
}

let cart = {};

function orderItem(itemName, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    alert(`Pedido realizado: ${quantity} ${itemName}`);
}

function addToCart(itemName, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (cart[itemName]) {
        cart[itemName] += quantity;
    } else {
        cart[itemName] = quantity;
    }
    alert(`${quantity} ${itemName} añadidos al carrito.`);
}


function updateCartTotal() {
    let total = 0;
    for (let item in cart) {
        total += cart[item].price * cart[item].quantity;
    }
    document.getElementById('cart-total').innerText = `Total: $${total} pesos`;
}

function orderItem(itemName, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (cart[itemName]) {
        cart[itemName].quantity += quantity;
    } else {
        cart[itemName] = { price: 25, quantity: quantity };
    }
    alert(`Pedido realizado: ${quantity} ${itemName}`);
    updateCartTotal();
}

function addToCart(itemName, quantityId) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (cart[itemName]) {
        cart[itemName].quantity += quantity;
    } else {
        cart[itemName] = { price: 25, quantity: quantity };
    }
    alert(`${quantity} ${itemName} añadidos al carrito.`);
    updateCartTotal();
}

document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Has hecho clic en el enlace: ${link.innerText}`);
    });
});

function agregarAlCarrito() {
    const cantidad = document.getElementById('quantity-pastelitos').value;
    const precio = 25.00; // Precio de cada pastelito
    const total = cantidad * precio;

    // Actualiza el total mostrado al lado del carrito
    document.getElementById('total-pastelitos').innerText = `$${total.toFixed(2)}`;

    alert(`Has agregado ${cantidad} pastelito(s) al carrito. Total: $${total.toFixed(2)}`);
}



