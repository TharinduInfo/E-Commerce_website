const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
//array
const products = [
    {
        id: 1,
        title:"Nike Air",
        price:8500,
        colors:[
            {
                code:"black",
                img:"img/air.png",
            },
            {
                code:"darkblue",
                img:"img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title:"Air Jordan",
        price:9500,
        colors:[
            {
                code: "lightgray",
                img:"img/jordan.png",
            },
            {
                code:"green",
                img:"img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 5000,
        colors: [
          {
            code: "lightgray",
            img: "/img/blazer.png",
          },
          {
            code: "green",
            img: "/img/blazer2.png",
          },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 4500,
        colors: [
          {
            code: "black",
            img: "/img/crater.png",
          },
          {
            code: "lightgray",
            img: "/img/crater2.png",
          },
        ],
  
    },
    {
        id: 5,
        title: "Hippie",
        price: 4000,
        colors: [
          {
            code: "gray",
            img: "/img/hippie.png",
          },
          {
            code: "black",
            img: "/img/hippie2.png",
          },
        ],
    },

];

//initializing a variable to hold the chosen product (initially the first product)
let choosenProduct = products[0];

//selecting elements related to the current product display
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProdutSize = document.querySelectorAll(".size");

//adding event listeners to menu item
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the slides
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "Rs." + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img;
        
        //assing new colors
        currentProductColor.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});

//adding event listeners to color options
currentProductColor.forEach((color,index) => {
    color.addEventListener("click",() => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

//adding event listeners to size options
currentProdutSize.forEach((size,index) => {
    size.addEventListener("click",() => {
        currentProdutSize.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

//product button click event
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() => {
    payment.style.display = "flex"; //display the payment section
});

// close button click event
close.addEventListener("click",() => {
    payment.style.display = "none"; //hide the payment section
});


