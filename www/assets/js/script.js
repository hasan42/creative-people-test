"use strict";

/* slider */
/* 
  пагинация в этом слайдере не переключается автоматически.
  узнал об этом только когда заканчивал.
  поэтому решил просто пересоздавать слайдер.
*/
var sliderTpe = null;
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: window.innerWidth < 767 ? 'bullets' : 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});


$(window).resize(()=>{
  if(window.innerWidth < 767){
    if(sliderTpe !== 'mobile'){
      sliderTpe = 'mobile';
      swiper.destroy(true,false);
      swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
      });
    }
  }else{
    if(sliderTpe !== 'desctop'){
      sliderTpe = 'desctop';
      swiper.destroy(true,false);
      swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  }
});

/* promo */
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

  if(parent.classList.contains("promo__item_active")){
    changeClass(false)
    parent.classList.remove("promo__item_de-active")
    parent.classList.remove("promo__item_active")
  }else{
    changeClass(true)
    parent.classList.remove("promo__item_de-active")
    parent.classList.add("promo__item_active")
  }
  $(this).blur()
}

let promoItems = document.querySelectorAll(".promo__item");
promoItems.forEach((el)=>{
  el.addEventListener("click",toggleIt, false);
});

/* anchor */
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

/* scroll header */
var lastScrollTop = 0;
window.addEventListener("scroll", function(){ 
  let header = document.querySelector("header.header");
  var st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
    header.classList.add("header_hide")
  } else {
    header.classList.remove("header_hide")
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);