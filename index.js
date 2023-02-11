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
})

let forms = document.querySelector(".modal")

let buttons = document.querySelectorAll(".button-next")
console.log(buttons)
for(let i =0; i<buttons.length;i++){
  buttons[i].addEventListener('click',function(){
   if(buttons[i]='click'){
    forms.style.displayBlock ="block"
   }
  })
}