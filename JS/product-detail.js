// Click xem hình ảnh khác của sản phẩm
const hoverImages = document.querySelectorAll(".small-product-img div img");
const bigImage = document.querySelector(".big-product-img img");
hoverImages.forEach((image) => {
  image.addEventListener("click", () => {
    const rootImg = bigImage.src;
    bigImage.src = image.src;
    image.src = rootImg;
  });
});

// Click yêu thích sản phẩm
const heart = document.querySelector(".heart");
heart.addEventListener("click", () => {
  heart.classList.toggle("red-heart");
});

// Thông báo thêm vào giỏ hàng thành công
const boxInform = document.querySelector(".box-inform");
boxInform.classList.add("hidden-box"); // Thêm class để ẩn hộp thông báo ban đầu
const add_cart_btn = document.querySelector(".add-cart-btn");
add_cart_btn.addEventListener("click", () => {
  boxInform.classList.remove("hidden-box"); // Xoá class ẩn hộp thông báo để hiển thị
  // Sau 2 giây thì ẩn hộp thông báo
  setTimeout(() => {
    boxInform.classList.add("hidden-box");
  }, 2000);
});


// Chuyển qua trang mua hàng
const buy_now_btn = document.querySelector(".buy-now-btn");
buy_now_btn.addEventListener("click", () => {
  window.location.href = "buy-now.html";
});

//Load thông tin sản phẩm được chọn
const id = JSON.parse(localStorage.getItem("productDetail"));
const container = document.querySelector(".product-meta");
fetch("../JSON/productInformation.json")
  .then(res => res.json())
  .then(products => {
    for (const item of products) {
      if (item.id == id) {
        container.innerHTML = `
  <span class="product-name">
    ${item.name}
    <i class="heart fa-regular fa-heart"></i>
  </span>
  <div class="product-pricing">
    <span class="product-price">${item.price.toLocaleString("vi-VN")} ₫</span>
    <span class="product-old-price">${item.oldPrice.toLocaleString("vi-VN")} ₫</span>
    <span class="product-discount">-${item.discount}%</span>
  </div>
  <p class="product-description">${item.description}</p>
        `
        break;
      }
    }
  })
  .catch(error => console.error("Không thể load dữ liệu: ", error));
