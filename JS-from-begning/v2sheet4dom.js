// innerHTML
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);                            // to get innerHTML of any tag or element 
// headline.innerHTML = "<h2>Inner HTML changed</h2>";
// headline.innerHTML += "<button class=\"btn\">New Button</button>"                 // += means to add new line with previous line
// console.log(headline.innerHTML); 


// Dom Traversing //
// tree in copy//
// if we know root node than we can traverse(khi bi ja sakte hai) anywhere
// to check child node //
// const rootNode = document.getRootNode();                            // to get root node
// const htmlElementNode = rootNode.childNodes[0];                     // to get child node of root node
// console.log(htmlElementNode.childNodes);                            // output --> NodeList(3) [head, text, body]
// console.dir(htmlElementNode);
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode);
// console.log(bodyElementNode);

// to find parent node //
// console.log(headElementNode.parentNode);

// to find sibling //
// console.log(headElementNode.nextSibling);                       // to get just next sibling
// if you check text log then find in data:"\n\n" and in textContent:"\n\n"
// console.log(headElementNode.nextSibling.nextSibling);           // to get next to next sibling     

// one more property to get Element Sibling Node
// console.log(headElementNode.nextElementSibling);                   // nextElementSibling provides element sibling ignore all text or space node
// console.log(headElementNode.childNodes);

// to get parent node//
// const h1= document.querySelector("h1");
// const h1ParentNode = h1.parentNode;
// h1ParentNode.style.color = "#efefef";
// h1ParentNode.style.backgroundColor = "#333";

// console.log(h1ParentNode);

// to get grandparent Node//
// const h1= document.querySelector("h1");
// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

// * important selectors * //
// const body = document.body;
// console.log(body);

// const head = document.querySelector("head");                             // finding direct head of html
// console.log(head);
// const title = head.querySelector("title");                              // finding title inside head
// console.log(title);
// console.log(title.childNodes);

// children //
// const container = document.querySelector(".container")
// console.log(container.children);                                        // childnode provides element & text node but children provide only element