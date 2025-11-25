// split : cắt chuỗi theo kí tự truyền vào và chuyển thành mảng , dùng pop để lấy phần tử cuối
// pathname: trả về chuỗi sau tên miền (https://time.com/ trả về đoạn này gồm dấu chéo phía trước.....)

// Đợi trình duyệt render toàn bộ layout 
document.addEventListener("DOMContentLoaded", () => {
   const pathPage = window.location.pathname.split("/").pop();
   // pathPage = "home.html" vì url trả về là https://RoyalTime.com/HTML/home.html
   if (pathPage === "product.html" || pathPage == "product-detail.html" || pathPage == "buy-now.html") {
      const cartIcon = `<a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>`;
      document.querySelector(".nav-icon").innerHTML += cartIcon;
   }
});

