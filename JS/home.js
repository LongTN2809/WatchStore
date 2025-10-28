const boxes = document.querySelectorAll(".reveal");
window.addEventListener('scroll' , ()=>{
    // Dung 4/5 phan man hinh de lam viewport va tinh khoang cach voi phan tu khac
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box=>{
      // Lay vi tri that su cua phan tu
      const boxTop = box.getBoundingClientRect().top;
      if(triggerBottom > boxTop){
         box.classList.add("show");
      }else{
         box.classList.remove("show");
      }
    });
});