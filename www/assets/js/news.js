"use strict";
/*
  наверное фильтр тоже надо было через js генерировать.
  оставил так для экономии времени.
*/

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let newsList = [{
  image: '/assets/images/news-0.jpg',
  link: '#',
  name: 'Киберпреступники тратят на атаки до  000',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-1.jpg',
  link: '#',
  name: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-2.jpg',
  link: '#',
  name: 'Глобального среднего класса больше не становится',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}, {
  image: '/assets/images/news-3.jpg',
  link: '#',
  name: 'Скорость доступа к запрещенным сайтам ограничит суд',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-4.jpg',
  link: '#',
  name: 'Самая читающая страна в мире',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-5.jpg',
  link: '#',
  name: 'Нуждаюсь в некоторой степени',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}, {
  image: '/assets/images/news-6.jpg',
  link: '#',
  name: 'Следственный комитет ищет экс-главу Северстали',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-7.jpg',
  link: '#',
  name: '«ПИК» уходит с Лондонской фондовой биржи',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-8.jpg',
  link: '#',
  name: 'Самая читающая страна в мире',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}, {
  image: '/assets/images/news-0.jpg',
  link: '#',
  name: 'Киберпреступники тратят на атаки до  000',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-1.jpg',
  link: '#',
  name: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-2.jpg',
  link: '#',
  name: 'Глобального среднего класса больше не становится',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}, {
  image: '/assets/images/news-3.jpg',
  link: '#',
  name: 'Скорость доступа к запрещенным сайтам ограничит суд',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-4.jpg',
  link: '#',
  name: 'Самая читающая страна в мире',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-5.jpg',
  link: '#',
  name: 'Нуждаюсь в некоторой степени',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}, {
  image: '/assets/images/news-6.jpg',
  link: '#',
  name: 'Следственный комитет ищет экс-главу Северстали',
  text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
  date: '10.07.2019'
}, {
  image: '/assets/images/news-7.jpg',
  link: '#',
  name: '«ПИК» уходит с Лондонской фондовой биржи',
  text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
  date: '25.06.2019'
}, {
  image: '/assets/images/news-8.jpg',
  link: '#',
  name: 'Самая читающая страна в мире',
  text: 'Замедление Китая и общая неопределенность заморозили активы населения',
  date: '31.05.2019'
}];

class News {
  constructor(list) {
    _defineProperty(this, "news", []);

    _defineProperty(this, "newsFull", []);

    _defineProperty(this, "listNews", null);

    _defineProperty(this, "loadMoreBtn", null);

    _defineProperty(this, "currentPage", 0);

    _defineProperty(this, "maxItems", 9);

    _defineProperty(this, "filterMonth", '00');

    _defineProperty(this, "filterYear", '2019');

    this.newsFull = list;
    this.news = list;
  }

  start() {
    this.createList();
    this.addButtonEvent();
    this.checkCountNewsList();
    this.addFilterEvent();
  }

  createList() {
    this.listNews = document.getElementById("news-list");
    let start = this.currentPage * this.maxItems;
    let end = (this.currentPage + 1) * this.maxItems;
    let arr = this.news.slice(start, end);
    arr.forEach(el => {
      this.listNews.append(this.addNewsListItem(el));
    }); // this.news = [...this.news, ...arr];
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

  checkCountNewsList() {
    let arr = this.listNews.querySelectorAll(".news-list__item");

    if (arr.length >= this.newsFull.length) {
      this.hideButtonLoadMore();
    } else {
      this.showButtonLoadMore();
    }
  }

  addButtonEvent() {
    this.loadMoreBtn = document.querySelector(".news-load-more > button");
    this.loadMoreBtn.addEventListener('click', this.onClickLoadMore.bind(this));
  }

  hideButtonLoadMore() {
    this.loadMoreBtn.classList.add("news-load-more_hide");
  }

  showButtonLoadMore() {
    this.loadMoreBtn.classList.remove("news-load-more_hide");
  }

  onClickLoadMore() {
    this.currentPage++;
    this.createList();
    this.checkCountNewsList();
  }

  addFilterEvent() {
    let filters = document.querySelectorAll(".news-filter__item");
    filters.forEach(el => {
      el.addEventListener('click', this.onClickOpenFilter.bind(this));
    });
    let filterItems = document.querySelectorAll(".news-filter__list");
    filterItems.forEach(el => {
      el.addEventListener('click', this.onClickFilterItem.bind(this));
    });
  }

  onClickOpenFilter() {
    event.stopPropagation();
    let parent = event.target.parentNode;
    parent.classList.toggle("news-filter__item_open");
  }

  onClickFilterItem() {
    event.stopPropagation();
    this.currentPage = 0;

    if (event.target.classList.contains("news-filter__list")) {
      return;
    }

    let arr = null;
    let filter = event.target.getAttribute('data-filter');

    if (filter.length > 2) {
      this.filterYear = filter;
    } else {
      this.filterMonth = filter;
    }

    let filterString = this.filterMonth === '00' ? `.${this.filterYear}` : `.${this.filterMonth}.${this.filterYear}`;
    arr = this.newsFull.filter(el => el.date.indexOf(filterString) !== -1);
    this.news = arr;

    if (arr.length <= 0) {
      this.listNews.innerHTML = 'Нет новостей';
    } else {
      this.listNews.innerHTML = '';
    }

    if (arr.length > this.maxItems) {
      this.showButtonLoadMore();
    } else {
      this.hideButtonLoadMore();
    }

    let parent = event.target.closest(".news-filter__item");
    parent.classList.toggle("news-filter__item_open");
    let text = event.target.textContent;
    let selected = event.target.parentNode.parentNode.querySelector(".news-filter__selected");
    selected.textContent = text;
    this.createList();
  }

}

let news = new News(newsList);
news.start();