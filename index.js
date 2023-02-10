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


