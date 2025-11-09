//Tăng giảm số lượng sản phẩm muốn mua
const increaseBtn = document.querySelector(".plus-btn");
const reduceBtn = document.querySelector(".minus-btn");
let displayQty = document.querySelector(".quantity-input");

// Hàm tăng số lượng
increaseBtn.addEventListener("click",()=>{
   let qty = Number(displayQty.value);
   const productInfo = document.querySelector(".product-infor-ordered");
   let price = productInfo.querySelector(".product-price");
   if(qty => 1 && qty < 999){ // Vì js kiểm tra giá trị trước mới thực hiện
    qty++;
   displayQty.value = qty;
   }
});

// Hàm giảm số lượng
reduceBtn.addEventListener("click",()=>{
  let qty = Number(displayQty.value);
  if(qty > 1){ // Vì js kiểm tra giá trị trước mới thực hiện
    qty--;
   displayQty.value = qty;
   }
});


