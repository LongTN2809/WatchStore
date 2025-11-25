



// //Kiểm tra radio nào được click
// let radioes = document.querySelectorAll('input[name="payment"]');
// let methodSelectBefore = document.querySelector(".selected"); // Lấy thẻ ban đầu được mặc định chọn
// let methodDetailIsShowed = document.querySelector(".show-method-detail");
// radioes.forEach((radio) => {
//   radio.addEventListener("change", () => {
//     let methodIsSelecting = radio.closest(".method-header"); // tìm thẻ cha có class .method
//     methodIsSelecting.classList.add("selected"); // thêm class cho cái mới
//     methodSelectBefore.classList.remove("selected"); // bỏ class ở cái cũ
//     methodSelectBefore = methodIsSelecting; // cập nhật lại cái vừa được chọn

//     // Hiển thị chi tiết thanh toán của từng phương thức thanh toán
//     // Ẩn phần đã được hiện trước đó khi thay đổi phương thức
//     methodDetailIsShowed.classList.remove("show-method-detail");
//     let detailId ; // Biến chứa id của radio được click để tìm theo id
//     // tìm detail của input dựa vào id của input
//     if(radio.id == "bank"){ 
//       detailId = "bank-transfer-detail"; 
//     }else if(radio.id == "cash"){
//       detailId = "cash-detail";
//     }else{
//       detailId = "e-wallet-detail";
//     }
//     // Lấy phần tử tương ứng
//     const currentDetail = document.getElementById(detailId);
//     // Kiểm tra tránh lỗi currentDetail bị null;
//     if(currentDetail){
//       currentDetail.classList.add("show-method-detail");
//       methodDetailIsShowed = currentDetail; // gán lại phần tử đã được hiện
//     }else{
//       console.log("Error");
//     }
//   });
// });

// Hàm dùng chung cho các radio
function useRadioGroup(obj) {
  const {
    radioName,
    radioHeader,
    selectedClass,
    showMethodDetail,
    details
  } = obj;
  let radioes = document.querySelectorAll(`input[name="${radioName}"]`);
  let headerSelectedDefault = null;
  let detailTargetDefault = null;
  // Thêm tự động class selected và show detail
  for (let i = 0; i < radioes.length; i++) {
    if (radioes[i].checked) {
      if (radioHeader) {
        headerSelectedDefault = radioes[i].closest(`.${radioHeader}`);
        headerSelectedDefault.classList.add(selectedClass);
        detailTargetDefault = document.querySelector(headerSelectedDefault.dataset.target);
        // Nếu object có detail để add class
        if (showMethodDetail) {
          detailTargetDefault.classList.add(showMethodDetail);
        }
      }
    }
  }

  radioes.forEach((radio) => {
    radio.addEventListener("change", () => {
      // lấy header của radio vừa được chọn mới
      let newHeaderSelected = radio.closest(`.${radioHeader}`);
      let targetSelector = newHeaderSelected.dataset.target;
      let currentDetail = document.querySelector(targetSelector);
      if (newHeaderSelected) {
        // Xoá cái cũ trước
        headerSelectedDefault.classList.remove(selectedClass);
        console.log(headerSelectedDefault);
        // Thêm selected cho cái mới
        newHeaderSelected.classList.add(selectedClass);
        console.log(newHeaderSelected);
        // Tương tự
        if (showMethodDetail) {
          // Chỉ có khi chọn các phương thức thanh toán mới có detail thêm
          detailTargetDefault.classList.remove(showMethodDetail);
          currentDetail.classList.add(showMethodDetail);
        }

        // gán các phần tử cũ với phần tử mới
        detailTargetDefault = currentDetail;
        headerSelectedDefault = newHeaderSelected;
      }
    })
  });
}

useRadioGroup({
  radioName: "payment",
  radioHeader: "method-header",
  selectedClass: "selected",
  showMethodDetail: "show-method-detail",
});

useRadioGroup({
  radioName: "e-wallet-momo",
  radioHeader: "e-wallet-option",
  selectedClass: "selected",
});
function clickMethodHeader(classOfDiv) {
  const methodDivs = document.querySelectorAll(`.${classOfDiv}`);
  methodDivs.forEach((methodDiv) => {
    const radio = methodDiv.querySelector('input[type="radio"]');
    methodDiv.addEventListener('click', () => {
      radio.checked = true;
      // Nếu có logic hiển thị detail:
      radio.dispatchEvent(new Event('change')); // Kích hoạt sự kiện change
    });
  });
}

clickMethodHeader("method-header");
clickMethodHeader("e-wallet-option");

// CLick to order
const order_btn = document.getElementById("order-btn");
order_btn.addEventListener("click", ()=>{
   
});