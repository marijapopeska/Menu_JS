const menu = [
    {
        id: 1,
        title: "Bacon and spinach scrambled eggs",
        category: "breakfast",
        price: 15.99,
        img: "images/breakfast - Gruyère, Bacon and Spinach Scrambled Eggs.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Cheesy Ground Beef Tacos",
        category: "lunch",
        price: 13.99,
        img: "images/launch - cheesy ground beef tacos.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Brown Sugar Old Fashioned",
        category: "coctails",
        price: 6.99,
        img: "images/coctail - brown sugar old fashioned.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "Lemon Almond Poppy Seed Muffins",
        category: "breakfast",
        price: 20.99,
        img: "images/breakfast- lemon almond poppy seed muffins.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "Classic Stuffed Peppers",
        category: "lunch",
        price: 22.99,
        img: "images/launch - classic stuffed peppers.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Moscow Mule",
        category: "coctails",
        price: 18.99,
        img: "images/coctail - moscow mule.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "French Toast",
        category: "breakfast",
        price: 8.99,
        img: "images/breakfast-french toast.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Sheet Pan Citrus-Glazed Chicken",
        category: "lunch",
        price: 12.99,
        img: "images/launch - sheet pan citrus-glazed chicken.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "Classic Manhattan",
        category: "coctails",
        price: 16.99,
        img: "images/coctail- classic manhattan.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Garlicky Lemon Mahi Mahi",
        category: "dinner",
        price: 22.99,
        img: "images/dinner-garlicky lemon mahi mahi.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Perfect Cosmopolitan",
        category: "coctails",
        price: 18.99,
        img: "images/coctail- perfect cosmopolitan.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },

    {
        id: 13,
        title: "Negroni",
        category: "coctails",
        price: 18.99,
        img: "images/coctail - negroni.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 14,
        title: "Grilled Steak",
        category: "dinner",
        price: 22.99,
        img: "images/dinner-grilled steak.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 15,
        title: "Za'Atar Sheet-Pan Chicken",
        category: "dinner",
        price: 22.99,
        img: "images/dinner-za'atar sheet-pan chicken.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 16,
        title: "Instant Oatmeal With Cranberries and Pecans",
        category: "breakfast",
        price: 8.99,
        img: "images/breakfast-instant oatmeal with cranberries and pecans.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 17,
        title: "Air Fryer Cannoli",
        category: "dessert",
        price: 10.99,
        img: "images/desert-air fryer cannoli.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 18,
        title: "Butter Pecan Cheesecake",
        category: "dessert",
        price: 10.99,
        img: "images/desert-butter pecan cheesecake.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 19,
        title: "Keto Red Velvet Cake",
        category: "dessert",
        price: 12.99,
        img: "images/desert-keto red velvet cake.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 20,
        title: "Triple Chocolate Triflee",
        category: "dessert",
        price: 12.99,
        img: "images/desert-triple chocolate trifle.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
];


const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")



//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
    displayMenuButtons()
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src="./${item.img}" alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons() {
    const categories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        }
        return values
    }, ['all'])


    const categoryBtns = categories.map(function (category) {
        return ` <button type="button" class="filter-btn" data-id=${category}>${category}</button>`
    }).join("")
    container.innerHTML = categoryBtns
    container.classList.add("scrollable");

    const filterBtns = document.querySelectorAll(".filter-btn")

    //filter items

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {

            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {

                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });

    for (let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
                
            }
            // console.log(filterBtns)
            this.className += " active";
        });
    }


}

