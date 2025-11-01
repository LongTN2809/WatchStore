// split : cắt chuỗi theo kí tự truyền vào và chuyển thành mảng , dùng pop để lấy phần tử cuối
// pathname: trả về chuỗi sau tên miền (https://time.com/ trả về đoạn này gồm dấu chéo phía trước.....)
const pathPage = window.location.pathname.split("/").pop();
// pathPage = "home.html" vì url trả về là https://RoyalTime.com/HTML/home.html
if(pathPage === "product.html"){
   const cartIcon = `<a href=""><i class="fa-solid fa-cart-shopping"></i></a>`;
   document.querySelector(".nav-icon").innerHTML += cartIcon;
}