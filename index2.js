let clickLikes = document.querySelectorAll(".heart");


for(let i =0;i<clickLikes.length;i++){
  clickLikes[i].addEventListener('click',function(){
clickLikes[i].style.backgroundColor = "#2c71b8"
clickLikes[i].style. backgroundImage ='url(images/like-white.png)'   
  })
  
}
