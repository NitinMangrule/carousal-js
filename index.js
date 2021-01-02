// console.log(Math.max()); // -Infinity
// console.log(Math.max(1,2,3,4));

// console.log(Math.min());
// console.log(Math.min(1,2,3,4,-5));


// Shodow Dom


// var host = document.querySelector('#shadowHost');

// var shadowRoot = host.attachShadow({ mode: 'open'});

// var div = document.createElement('div');
// div.textContent = "Can you see me now";
// div.className = "x";

// shadowRoot.appendChild(div);

// Code for carousel using Javascript



let listElements, index = 0;

function pageLoad() {
    listElements = document.querySelectorAll('.list');
    listElements[0].scrollIntoView({ behavior: "smooth"});
}
pageLoad();
function navigate(count) {
    
    listElements = document.querySelectorAll('.list');
    index = index + count;
    index =  Math.min(Math.max(index , 0), listElements.length - 1);
    listElements[index].scrollIntoView({ behavior: "smooth"});
    console.log(listElements, index);  
}



























