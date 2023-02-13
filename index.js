let productsContEl = document.querySelector(".number")
// console.log(productsContEl)

let addToCartBtns = document.querySelectorAll(".button-add")
// console.log(addToCartBtns)


for(let i =0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click",function(){
   let PreproductsCont = +productsContEl.textContent;
   productsContEl.textContent = PreproductsCont +1
  })
}


// addToCartBtns.forEach((but) =>but.addEventListener("click",function(){
//   console.log("clickrd")
// })
// )

let clickLikes = document.querySelectorAll(".heart");

clickLikes.forEach((item) => {
  item.addEventListener("click", function(){
      if(item.style.backgroundColor === "" || item.style.backgroundColor === "transparent"){
          item.style.backgroundColor = " #235a93";
          item.style.backgroundImage = "url(images/like-white.png)";
      } else {
          item.style.backgroundColor = "transparent";
          item.style.backgroundImage =" url(images/imglike.png)";
      }
  })
});


let Terbota = document.querySelectorAll(".button-next");
let modal = document.querySelector(".modal")
let close = document.querySelector(".btn-close")

Terbota.forEach((item)=>item.addEventListener("click", openModal));
close.addEventListener("click",closeModal)

function openModal (){
  modal.classList.add("show") 
modal.classList.remove("hide") 
}

function closeModal(){
  modal.classList.add("hide")
 modal.classList.remove("show")
}

modal.addEventListener("click",function(e){
  if(e.target===modal){
    closeModal()
  }
})

//slick
$(".slider-block").slick({
  autoplay: true,
  dots:true,
 
});



