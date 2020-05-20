"use strict";

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function changeClass(makeActive){
  let promoItems = document.querySelectorAll(".promo__item");
  promoItems.forEach((el)=>{
    el.classList.remove("promo__item_active")
    if(makeActive === true){
      el.classList.add("promo__item_de-active")
    }else{
      el.classList.remove("promo__item_de-active")
    }
  });
}

function toggleIt(event){
  event.preventDefault();
  let parent = event.target;
  if(!parent.classList.contains("promo__item")){
    return
  }
  console.log(parent)
  // let parent = event.target.closest(".promo__item");

  if(parent.classList.contains("promo__item_active")){
    changeClass(false)
    parent.classList.remove("promo__item_de-active")
    parent.classList.remove("promo__item_active")
  }else{
    changeClass(true)
    parent.classList.remove("promo__item_de-active")
    parent.classList.add("promo__item_active")
  }

}

let promoItems = document.querySelectorAll(".promo__item");
promoItems.forEach((el)=>{
  // let button = el.querySelector(".promo__item__close");
  el.addEventListener("click",toggleIt, false);
});


function scrollToAnchor(event){
  event.preventDefault();
  let str = event.target.href.split('#');
  if(str.length <= 1){ return }
  let findId = str[1];
  let content = document.getElementById(findId);
  if(!content){ return }
  let scroll = content.offsetTop;
  $("html,body").animate({ scrollTop: scroll }, 500);
}

let anchorItems = document.querySelectorAll(".article-anchor__item");
anchorItems.forEach((el)=>{
  el.addEventListener("click",scrollToAnchor, false);
});