

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



























