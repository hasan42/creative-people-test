"use strict";

function finishSubscribe(event){
  event.preventDefault();
  event.target.classList.toggle("loading");
  event.target.blur();
  setTimeout(()=>{
    let form = event.target.closest(".flipper");
    form.classList.add("flipper_done");
    // setTimeout(()=>{
    //   let content = form.querySelector(".flipper__front");
    //   content.classList.add("hide");
    // },500);
  },1500);
}

function openCollapse(event){
  event.preventDefault();
  let parent = event.target.closest(".collapse");
  let opener = parent.querySelector(".collapse__opener");
  let content = parent.querySelector(".collapse__content");
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  parent.classList.add("open");
  // content.classList.toggle("open");
}

let btnSubFinish = document.getElementById("subscribe-finish");
btnSubFinish.addEventListener("click", finishSubscribe, false);

let btnSubFinish2 = document.getElementById("subscribe-finish-2");
btnSubFinish2.addEventListener("click", finishSubscribe, false);

let btnCollapse = document.getElementById("collapse");
btnCollapse.addEventListener("click", openCollapse, false);