// Click xem hình ảnh khác của sản phẩm
const hoverImages = document.querySelectorAll(".small-product-img div img");
const bigImage = document.querySelector(".big-product-img img");
hoverImages.forEach((image)=>{
   image.addEventListener("click" , ()=>{
       const rootImg = bigImage.src;
       bigImage.src = image.src;
       image.src = rootImg;
   });
});

// Click yêu thích sản phẩm
const heart = document.querySelector(".heart");
heart.addEventListener("click" , ()=>{
   heart.classList.toggle("red-heart");
});

// Thông báo thêm vào giỏ hàng thành công
const boxInform = document.querySelector(".box-inform");
boxInform.classList.add("hidden-box"); // Thêm class để ẩn hộp thông báo ban đầu
const add_cart_btn = document.querySelector(".add-cart-btn");
add_cart_btn.addEventListener("click",()=>{
    boxInform.classList.remove("hidden-box"); // Xoá class ẩn hộp thông báo để hiển thị
    // Sau 2 giây thì ẩn hộp thông báo
    setTimeout(()=>{
      boxInform.classList.add("hidden-box"); 
    },2000);
});
