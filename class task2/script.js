let cart = [];

function addToCart(name, price){

    let item = cart.find(product => product.name === name);

    if(item){
        item.quantity++;
    }else{
        cart.push({
            name:name,
            price:price,
            quantity:1
        });
    }

    displayCart();
}

function removeItem(name){

    let item = cart.find(product => product.name === name);

    if(item.quantity > 1){
        item.quantity--;
    }else{
        cart = cart.filter(product => product.name !== name);
    }

    displayCart();
}

function displayCart() {

    const list = document.getElementById("cartList");
    const total = document.getElementById("total");
    const count = document.getElementById("cart-count");

    list.innerHTML = "";

    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach(item => {

        totalPrice += item.price * item.quantity;
        totalItems += item.quantity;

        list.innerHTML += `
            <li>
                <span>${item.name} x ${item.quantity}</span>

                <span>
                    $${(item.price * item.quantity).toFixed(2)}
                    <button class="remove" onclick="removeItem('${item.name}')">-</button>
                </span>
            </li>
        `;
    });

    total.textContent = totalPrice.toFixed(2);
    count.textContent = totalItems;
}
