// Click xem hình ảnh khác của sản phẩm
const hoverImages = document.querySelectorAll(".small-product-img div img");
const bigImage = document.querySelector(".big-product-img img");
if (hoverImages) {
  hoverImages.forEach((image) => {
    image.addEventListener("click", () => {
      const rootImg = bigImage.src;
      bigImage.src = image.src;
      image.src = rootImg;
    });
  });
}


// Click yêu thích sản phẩm
const heart = document.querySelector(".heart");
if (heart) {
  heart.addEventListener("click", () => {
    heart.classList.toggle("red-heart");
  });
}

// Thông báo thêm vào giỏ hàng thành công
const boxInform = document.querySelector(".box-inform");
const add_cart_btn = document.querySelector(".add-cart-btn");
  boxInform.classList.add("hidden-box"); // Thêm class để ẩn hộp thông báo ban đầu
  add_cart_btn.addEventListener("click", () => {
    boxInform.classList.remove("hidden-box"); // Xoá class ẩn hộp thông báo để hiển thị
    // Sau 2 giây thì ẩn hộp thông báo
    setTimeout(() => {
      boxInform.classList.add("hidden-box");
    }, 2000);

    // Nếu chưa có storage thì tạo mảng rỗng , nếu không thì sử dụng tiếp 
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const fakeDataProduct = {
      urlImg: "../Image/bailam/Rolex/tải xuống (1).png",
      nameProduct: "Rolex Cosmograph Daytona , Luxury Sports Watch",
      priceProduct: "4,090,000,000 ₫",
    };
    cart.push(fakeDataProduct);
    localStorage.setItem('cart' , JSON.stringify(cart));
  });
  



// Chuyển qua trang mua hàng
const buy_now_btn = document.querySelector(".buy-now-btn");
if (buy_now_btn) {
  buy_now_btn.addEventListener("click", () => {
    window.location.href = "buy-now.html";
  });
}