const boxes = document.querySelectorAll(".reveal");
window.addEventListener("scroll" , ()=>{
   // LẤY 80% CHIỀU CAO CỦA MÀN HÌNH HIỂN THỊ
   const triggerBottom = window.innerHeight * 4 / 5; // nhân chéo chia ngang
   boxes.forEach(box=>{
      const boxTop = box.getBoundingClientRect().top;
      if(triggerBottom > boxTop) box.classList.add("show");
      else box.classList.remove("show");
   });
   
});

const buttonToProduct = document.getElementById("goToProduct");
buttonToProduct.addEventListener("click" ,()=>{
  window.location.href = "product.html";
});
