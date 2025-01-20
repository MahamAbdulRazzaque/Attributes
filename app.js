let element = document.getElementById("container");
let hasClass = element.hasAttribute("class");
console.log(hasClass);
let getAttribute = element.getAttribute("class");
console.log(getAttribute);
element.setAttribute("title" , "This is a paragraph");
console.log(element.outerHTML); 


let img = document.getElementById("content");
let has = img.hasAttribute("class");
let have = img.setAttribute("src" , "download.jfif");
