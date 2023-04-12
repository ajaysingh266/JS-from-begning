// DOM
// document object model
// overview
// how to use
// deep study
// browser make a object (key value pair). that object is known as documents
// console.log(window.document);
// window ke pas ek document object hota hai, bahut hi important hota hai
// console.dir(document);

// select element using get element by id//
// console.log(document.getElementById("main-heading"));              // always return an object
// console.dir(document.getElementById("main-heading"));
// console.log(typeof document.getElementById("main-heading"));                           // always return an object
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// select element using query selector//
// const mainHeading = document.querySelector("#main-heading");                            // if we want to access id from query selector then put # befor id name
// console.log(mainHeading);
// const header = document.querySelector(".header");                                       // to access className put .(dot) befor className
// console.log(header);
// const navItem = document.querySelector(".nav-item");                        // if same class in many element then query selector only provide first element.
// console.log(navItem);
// const navItemall = document.querySelectorAll(".nav-item");              // selectorall provide all elements of same class
// console.log(navItemall);                            // always provide node list in form of array         // but array ni hota


// change text
// textContent and innerText
// inner text show text only shown data 
// textContent show hidden data also
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);                               // textContent provide text of that class or id
// mainHeading.textContent="This is new text";
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);


// change the styles of elements
// const mainHeading = document.querySelector("div.headline h2");              // div directly access with dot notation tha class div selected, and space then tag name means that element pick 
// console.log(mainHeading.style);                    // this property shows all styles of that element
// style also an object
// mainHeading.style.color= "blue";
// mainHeading.style.backgroundColor= "green";                 // for - properties like background-color changes to backgroundColor(in camelCase), - this symbol shows an error in JS
// mainHeading.style.border="2px solid red";


// get and set attributes //
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));                             // getAttribute method to get attributes or properties of element
// link.setAttribute("href", "https://ajay.com");                     // setting new attribute 1parameter kya change karna 2 parameter kya set karna
// console.log(link.getAttribute("href"));
// attributes are class, id, name, type, placeholder, value, href
// console.log(link.getAttribute("href").slice(1));                     // for removing 1 character

// const inputElement = document.querySelector(".form-todo input")
// console.log(inputElement.getAttribute("type"));



// get multiple Elements using getElements by class name
//  get multiple Elements using getElements by querySelectorAll
// const navItems = document.getElementsByClassName("nav-item");              // it provides HTMLCollection. these are array like objects means aap indxing kar sakte hai
// console.log(typeof navItems[0]);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item");                    // it provides NodeList, ye bhi array like object deta hai
// console.log(navItems[1]);

// loop // 
// const navItems = document.getElementsByTagName("a");
// console.log(navItems.length);
// array like object ---> indexing, length property
// loop we can use here
// simple for loop 
// for of loop
// forEach Method
// we can't use forEach mrthod to iterate through HTMLCollection

// for (let i = 0; i <= navItems.length; i++) {
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

// for of loop//
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

// changing a HTMLCollection into Array
// let navItems = document.getElementsByTagName("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//         navItem.style.color = "black";
//         navItem.style.fontWeight = "bold";
// })

// const navItems = document.querySelectorAll("a");
// console.log(navItems);
// all three loop implemented with NodeList method