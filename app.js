const menu = [
  {
    id: 1,
    title: "whole-grain pancakes",
    category: "breakfast",
    price: 12.99,
    img: "./images/whole-grain-pancake.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "banana pancakes",
    category: "breakfast",
    price: 12.99,
    img: "./images/banana-pancakes.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 3,
    title: "beef burger",
    category: "lunch",
    price: 11.99,
    img: "./images/beef-burger.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 4,
    title: "coffee milkshake",
    category: "shakes",
    price: 4.99,
    img: "./images/coffee-milkshake.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 5,
    title: "sunny breakfast",
    category: "breakfast",
    price: 13.99,
    img: "./images/sunny-breakfast.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 6,
    title: "Steak Burger",
    category: "lunch",
    price: 9.99,
    img: "./images/steak-burger.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 7,
    title: "Oreo Milkshake",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 8,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 9,
    title: "country steak",
    category: "lunch",
    price: 17.99,
    img: "./images/country-steak.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 10,
    title: "banana milkshakes",
    category: "shakes",
    price: 6.99,
    img: "./images/banana-milkshake.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Salmon Plate",
    category: "lunch",
    price: 15.99,
    img: "./images/salmon.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "cookie milkshake",
    category: "shakes",
    price: 4.99,
    img: "./images/oreo-milkshake.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 13,
    title: "Shrimp Plate",
    category: "lunch",
    price: 16.99,
    img: "./images/shrimp.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "Fettuccine Alfredo Plate",
    category: "lunch",
    price: 13.99,
    img: "./images/fettuccine.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');



// an event that fires when the page is done loading

window.addEventListener('DOMContentLoaded', function(){
displayMenuItems(menu);

})

// filter items

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function(e){
    // checks to see what is the category on each button. Putting "id" there because that is how it was named. That is how we target a data-set
   const category = e.currentTarget.dataset.id;
   const menuCategory = menu.filter(function(menuItem){
     if(menuItem.category === category) {
       return menuItem;
     }
   });
  
   if(category === 'all'){
     displayMenuItems(menu)
   }
   else{
     displayMenuItems(menuCategory)
   }
  });
});





function displayMenuItems(menuItems){
  
  //  each item in the menu array will have this function called upon it.
  let displayMenu = menuItems.map(function(item){
    
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
          </div>
          </article>`
  })
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu
}