const hearts = document.querySelectorAll(".heart");
hearts.forEach(function(heart){
  heart.addEventListener("click", ()=>{
       heart.classList.toggle('active');
  });
});