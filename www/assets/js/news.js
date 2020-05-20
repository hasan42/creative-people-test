"use strict";

let newsList = [
  { 
    image: '/assets/images/news-0.jpg',
    link: '#',
    name: 'Киберпреступники тратят на атаки до  000',
    text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: '10.07.2019'
  },
  { 
    image: '/assets/images/news-1.jpg',
    link: '#',
    name: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
    text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: '25.06.2019'
  },
  { 
    image: '/assets/images/news-2.jpg',
    link: '#',
    name: 'Глобального среднего класса больше не становится',
    text: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: '31.05.2019'
  },
  { 
    image: '/assets/images/news-3.jpg',
    link: '#',
    name: 'Скорость доступа к запрещенным сайтам ограничит суд',
    text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
    date: '10.07.2019'
  },
  { 
    image: '/assets/images/news-4.jpg',
    link: '#',
    name: 'Самая читающая страна в мире',
    text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: '25.06.2019'
  },
  { 
    image: '/assets/images/news-5.jpg',
    link: '#',
    name: 'Нуждаюсь в некоторой степени',
    text: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: '31.05.2019'
  },
  { 
    image: '/assets/images/news-6.jpg',
    link: '#',
    name: 'Следственный комитет ищет экс-главу Северстали',
    text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
    date: '10.07.2019'
  },
  { 
    image: '/assets/images/news-7.jpg',
    link: '#',
    name: '«ПИК» уходит с Лондонской фондовой биржи',
    text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
    date: '25.06.2019'
  },
  { 
    image: '/assets/images/news-8.jpg',
    link: '#',
    name: 'Самая читающая страна в мире',
    text: 'Замедление Китая и общая неопределенность заморозили активы населения',
    date: '31.05.2019'
  },
];

class News {
  news = [];
  newsFull = []
  listNews = null;
  loadMoreBtn = null;
  currentPage = 0;
  maxItems = 9;

  constructor(list) {
    this.newsFull = list;
    this.news = list;
  }

  start() {
    this.createList();
    this.addButtonEvent();
    this.checkCountNewsList();

    this.addFilterEvent();
  }

  createList(){
    this.listNews = document.getElementById("news-list");
    let start = this.currentPage * this.maxItems;
    let end = (this.currentPage + 1) * this.maxItems
    let arr = this.news.slice(start, end)
    arr.forEach((el)=>{
      this.listNews.append( this.addNewsListItem(el) );
    });
    // this.news = [...this.news, ...arr];
  }

  addNewsListItem(el) {
    let elem = document.createElement('div');
    elem.classList.add('news-list__item');
    elem.insertAdjacentHTML("afterbegin", `
      <div class="news-list__item__image" style="background-image: url(${el.image}"></div>
      <p class="news-list__item__name"><a href="${el.link}">${el.name}</a></p>
      <p class="news-list__item__text">${el.text}</p>
      <p class="news-list__item__date">${el.date}</p>
    `);
    return elem;
  }

  checkCountNewsList(){
    let arr = this.listNews.querySelectorAll(".news-list__item");
    if(arr.length >= this.newsFull.length){
      this.hideButtonLoadMore();
    }else{
      this.showButtonLoadMore();
    }
  }

  addButtonEvent() {
    this.loadMoreBtn = document.querySelector(".news-load-more > button");
    this.loadMoreBtn.addEventListener('click',this.onClickLoadMore.bind(this));
  }
  hideButtonLoadMore() {
    this.loadMoreBtn.classList.add("news-load-more_hide")
  }
  showButtonLoadMore() {
    this.loadMoreBtn.classList.remove("news-load-more_hide")
  }
  onClickLoadMore(){
    this.currentPage++;
    this.createList();
    this.checkCountNewsList();
  }

  addFilterEvent() {
    let filters = document.querySelectorAll(".news-filter__item");
    filters.forEach((el)=>{
      el.addEventListener('click',this.onClickOpenFilter.bind(this));
    });

    let filterItems = document.querySelectorAll(".news-filter__list");
    filterItems.forEach((el)=>{
      el.addEventListener('click',this.onClickFilterItem.bind(this));
    });
  }

  onClickOpenFilter(){
    event.stopPropagation();
    let parent = event.target.parentNode;
    parent.classList.toggle("news-filter__item_open");
  }

  onClickFilterItem(){
    event.stopPropagation();
    let filter = event.target.getAttribute('data-filter');
    if(filter.length > 2){
      // month
      filter = '.'+filter+'.';
    }else{
      // year
      filter = '.'+filter;
    }

    let arr = this.newsFull.filter( el => el.date.indexOf(filter) !== -1 )
    this.news = arr;
    if(arr.length <= 0){
      this.listNews.innerHTML = 'Нет новостей';
    }else{
      this.listNews.innerHTML = '';
    }

    let parent = event.target.parentNode;
    parent.classList.toggle("news-filter__item_open");

    this.createList();
  }

  // filterByMonths(month) {
  //   let arr = this.newsFull.filter( el => el.date.indexOf(`.${month}.`) !== -1 )
  //   this.news = arr;
  //   this.listNews.innerHTML = '';
  //   console.log(arr)
  //   this.createList();
  // }
  // filterByYear(year) {
  //   let arr = this.newsFull.filter( el => el.date.indexOf(`.${year}`) !== -1 )
  //   this.news = arr;
  //   if(arr.length <= 0){
  //     this.listNews.innerHTML = 'Нет новостей';
  //   }else{
  //     this.listNews.innerHTML = '';
  //   }
    
  //   console.log(arr)
  //   this.createList();
  // }




}

let news = new News(newsList);
news.start();