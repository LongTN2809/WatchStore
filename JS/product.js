const img_clickeds = document.querySelectorAll(".img_clicked");
img_clickeds.forEach((items) => {
  items.addEventListener("click", () => {
    const productInfo = items.closest(".product-items");
    const id = productInfo.dataset.id;
    localStorage.setItem("productDetail", id);
  });
});

