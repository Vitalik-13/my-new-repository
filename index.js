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
//модальне вікно

// modal.addEventListener("click",function(e){
//   if(e.target===modal){
//     closeModal()
   
//   }
// })

// setTimeout(openModal, 10000)


// function showModalByScroll() {
//   if (window.scrollY >= document.body.scrollHeight / 2) {
//       openModal();
//       window.removeEventListener("scroll",showModalByScroll)
//   }
// }

// window.addEventListener("scroll", showModalByScroll);
// //slick

$(".slider-block").slick({
  autoplay:true,
  dots:true,
 
});

AOS.init();

// const decrementBtns = document.querySelectorAll(".decrement-batton")[0]
// const incrementBtns = document.querySelectorAll(".increment-button")[0]
// const productsInput = document.querySelectorAll(".products-input")[0]

// function Counter(incrementBtn,decrementBtn, inputFiled){
//   this.domRefs ={
//     incrementBtn,
//     decrementBtn,
//     inputFiled,
//   }
//   this.toggleButnState = function(){
//     let count = this.domRefs.inputFiled.value
//     this.domRefs.decrementBtn.disabled = count <=1;
//     this.domRefs.incrementBtn.disabled = count >=10;
//   };

//   this.toggleButnState();
//   this.increment=function(){
//     this.domRefs.inputFiled.value = +this.domRefs.inputFiled.value+1;
//     this.toggleButnState()
//   }
//   this.decrement=function(){this.domRefs.inputFiled.value = this.domRefs.inputFiled.value-1;
//     this.toggleButnState()
//   }
//   this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this))
//   this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this))
// }

// const counter1= new Counter(incrementBtns,decrementBtns,productsInput)

const decrementBtns = document.querySelectorAll(".decrement-batton");
const incrementBtns = document.querySelectorAll(".increment-button");
const productsInputs = document.querySelectorAll(".products-input");

function Counter(incrementBtn,decrementBtn, inputFiled){
  this.domRefs ={
    incrementBtn,
    decrementBtn,
    inputFiled,
  }
  this.toggleButnState = function(){
    let count = this.domRefs.inputFiled.value
    this.domRefs.decrementBtn.disabled = count <=1;
    this.domRefs.incrementBtn.disabled = count >=10;
  };

  this.toggleButnState();
  this.increment=function(){
    this.domRefs.inputFiled.value = +this.domRefs.inputFiled.value+1;
    this.toggleButnState()
  }
  this.decrement=function(){this.domRefs.inputFiled.value = this.domRefs.inputFiled.value-1;
    this.toggleButnState()
  }
  this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this))
  this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this))
}

const counters = [];

for (let i = 0; i < incrementBtns.length; i++) {
  counters.push(new Counter(incrementBtns[i], decrementBtns[i], productsInputs[i]));
}