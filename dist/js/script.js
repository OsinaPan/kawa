/* eslint-disable no-undef */
import { settings } from './settings.js';
import { templates } from './templates.js';
const app = {
  initData: async function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    await fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  displayDynamicContent: function(template) {
    let content = $('#main-content');
    let footer = $('footer');
    $('#content-title').html(Handlebars.compile('{{title}}')({ title: this.currentPage == 'contact' ? 'contact us' : this.currentPage }));
    switch (template) {
    case 'home':
      content.html(Handlebars.compile(templates.products)({ products: this.data.products }));
      footer.css('display', 'block');
      break;
    case 'products':
      content.html(Handlebars.compile(templates.products)({ products: this.data.products }));
      footer.css('display', 'none');
      break;
    case 'contact':
      content.html(templates.contact);
      footer.css('display', 'none');
      break;
    }
  },

  init: async function() {
    const thisApp = this;
    await thisApp.initData();
    this.currentPage = 'home';
    this.headers = [
      { first: 'HOME OF', second: 'ORIGINAL TASTES' },
      { first: 'REAL VENEZUELA', second: 'REAL COFFEE' },
      { first: 'TASTE REAL', second: 'VENEZUELA' },
    ];
    Handlebars.registerHelper('isEven', (num) => { return +num % 2 == 0; });
    this.displayDynamicContent(this.currentPage);
    let randomHeader = this.headers[Math.floor(Math.random() * this.headers.length)];
    $('#random-first-header').html(randomHeader.first);
    $('#random-second-header').html(randomHeader.second);
    $('#scroll').click(function() {
      $('#content-title').get(0).scrollIntoView({behavior: 'smooth'});
    });
    $('.owl-carousel').owlCarousel({
      items: 1,
      mouseDrag: false,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
    });
    $('#tabs li').click((tab) => {
      this.currentPage = tab.target.getAttribute('data-template');
      this.displayDynamicContent(this.currentPage);
    });
  },
};

app.init();