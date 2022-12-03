import './style.scss';
import * as bootstrap from 'bootstrap';
import 'waypoints/lib/noframework.waypoints'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'; 



var typed = new Typed('.element', {
    strings: ['Food...', 'Drink...'],
    smartBackspace: true ,
    backDelay : 1000,
    backSpeed : 30,
    typeSpeed : 50,
    loop: true,

  });

  var todown = {
    distance: '70%',
    origin: 'top',
    duration : 800,
    interval : 900,
    
};

var toright = {
    distance: '50%',
    origin: 'left',
    duration : 800,
    interval : 100,

};

var toleft = {
    distance: '50%',
    origin: 'right',
    duration : 800,
    interval : 100,

};

ScrollReveal().reveal('.to-down', todown);
ScrollReveal().reveal('.to-right', toright);
ScrollReveal().reveal('.to-left', toleft);



var home = new Waypoint({
    element: document.getElementById('home'),
    handler: function(direction) {
        let home = document.querySelector("[href='#home']");
        let currentActive = document.querySelector('.active','.nav-link');
        currentActive.classList.remove('active');     
        home.classList.add('active');
        
    },
    offset : -20,
})

var about = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      let about = document.querySelector("[href = '#about']");
      let currentActive = document.querySelector('.active','.nav-link');
        currentActive.classList.remove('active');
        about.classList.add('active');                        
    },
    offset: 40,
})

var sevice = new Waypoint({
    element: document.getElementById('service'),
    handler: function(direction) {
      let service = document.querySelector("[href = '#service']");
      let currentActive = document.querySelector('.active','.nav-link');
      currentActive.classList.remove('active');
      service.classList.add('active')
        
    },
    offset: 40,
})

var menu = new Waypoint({
    element: document.getElementById('menu'),
    handler: function(direction) {
      let menu = document.querySelector("[href = '#menu']");
      let currentActive = document.querySelector('.active','.nav-link');
      currentActive.classList.remove('active');
      menu.classList.add('active')
       
    
    },
    offset: 30,
})

var contact = new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
      let contact = document.querySelector("[href = '#contact']");
      let currentActive = document.querySelector('.active','.nav-link');
      currentActive.classList.remove('active');
      contact.classList.add('active')
       
    
    },
    offset: 30,
})

let datas = [
    {
        img : './public/img/plate1.png',
        h5 : 'description Menu',
        p : 'enjoy food',
        price : 20
    },
    {
        img : './public/img/plate2.png',
        h5 : 'description Menu',
        p : 'enjoy food',
        price : 40
    },
    {
        img : './public/img/plate3.png',
        h5 : 'description Menu',
        p : 'enjoy food',
        price : 30
    },
    {
        img : './public/img/home.png',
        h5 : 'description Menu',
        p : 'enjoy food',
        price : 60
    }
]

// let menuRow = document.querySelector('.menu-row')

// datas.forEach(function(data){

//     let div = document.createElement('div');
//     div.classList.add('col-8','col-md-4','col-lg-3');
//     div.innerHTML = `
    
//     <div class=" card to-down shadow-sm border-0 card-ani">
//       <div class=" card-img pt-5 text-primary text-center">
//         <img src="${data.img}" alt="" class=" w-75">
//       </div>
//       <div class=" card-body mt-4 text-start"> 
//         <h6 class="card-title fw-bold font2">${data.h5}</h6>
//         <p class=" card-text small font2 text-black-50">${data.p}</p>
//         <div class=" pt-3 d-flex">
//           <span class="fw-bold me-auto">$ ${data.price} </span>
//           <a href="#" class=" btn btn-sm btn-primary" ><i class=" bi bi-cart-plus"></i></a>
//         </div>
//       </div>
//     </div>
//   `
//     menuRow.append(div);

// })
 
    
   

  
  