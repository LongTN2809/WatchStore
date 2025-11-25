
// Lấy dữ liệu storage
let takeData = JSON.parse(localStorage.getItem('cart')) || [];
let cartWrapper = document.querySelector(".cart-item-wrapper");

cartWrapper.innerHTML = "";
takeData.forEach((item) => {
    const [bold, notBold] = item.nameProduct.split(" , ");
    const newDiv = document.createElement("div");
    newDiv.classList.add("cart-item");
    newDiv.innerHTML = `
    <div class="item-img">
        <img src="${item.urlImg}" alt="">
    </div>
    <div class="item-info">
        <h3>${bold}</h3>
        <p>${notBold}</p>
    </div>
    <div class="item-price">${item.priceProduct}</div>
        <div class="quanity-group">
            <input type="button" name="btn-qty" class="plus-btn" value="+" id="">
            <input type="number" class="quantity-input" value="1" min="1" max="99" step="1">
            <input type="button" name="btn-qty" class="minus-btn" value="-">
        </div>
        <div class="item-total">${item.priceProduct}</div>
        <input type="button" class="item-remove" value="x">
  `;
    cartWrapper.appendChild(newDiv);
});

let countItem = document.getElementById("item-amount");

function updateCount() {
    let cartItems = document.querySelectorAll(".cart-item");
    if (cartItems.length > 1)
        countItem.innerText = cartItems.length + " items";
    else countItem.innerText = cartItems.length + " item";
}

// chạy lần đầu
updateCount();

document.querySelectorAll(".item-remove").forEach(btn => {
    btn.addEventListener("click", function () {
        // Xoá item trên giao diện
        btn.closest(".cart-item").remove();
        takeData.splice(0, 1);
        localStorage.setItem('cart', JSON.stringify(takeData));

        // Cập nhật lại số lượng
        updateCount();
    });
});