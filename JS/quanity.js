//Tăng giảm số lượng sản phẩm muốn mua

// Đợi render html
document.addEventListener("DOMContentLoaded", () => {
    let qtyGroupsBtn = document.querySelectorAll(".quanity-group"); // lấy các group chứa các nút tăng giảm
    if(qtyGroupsBtn){
        qtyGroupsBtn.forEach((group)=>{
           let increaseBtn = group.querySelector(".plus-btn");
           let reduceBtn = group.querySelector(".minus-btn");
           let displayInput = group.querySelector(".quantity-input");
           
           // Xử lý tăng số lượng
           increaseBtn.addEventListener("click",()=>{
             let currentAmount = Number(displayInput.value);
             if(currentAmount < 100){
                currentAmount++;
                displayInput.value = currentAmount;
             }
           });

           //Xử lý giảm số lượng
           reduceBtn.addEventListener("click",()=>{
             let currentAmount = Number(displayInput.value);
             if(currentAmount > 1){
                currentAmount--;
                displayInput.value = currentAmount;
             }
           });
        });
    }
});
