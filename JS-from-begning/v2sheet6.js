// some old methods to support poor IE //
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;


// static list vs live list //

// querySelectorAll hume static list degi //
// const listIems = document.querySelectorAll(".todo-list li");
// console.log(listIems);
// const sixthLi = document.createElement("li");
// sixthLi.textContent="Todo 6";
// const ul = document.querySelector(".todo-list");
// ul.append(sixthLi);

// getElementsBy(TagName, ClassName, Id) hume live list degi  //
// const ul = document.querySelector(".todo-list");
// const listIems = ul.getElementsByTagName("li");
// console.log(listIems);
// const sixthLi = document.createElement("li");
// sixthLi.textContent="Todo 6";
// ul.append(sixthLi);
// console.log(listIems);


// how to get the dimension of element //
// height width
const sectionTodo = document.querySelector(".todo-section");
// const info = sectionTodo.getBoundingClientRect();        //it provide all information about height, width etc
const info = sectionTodo.getBoundingClientRect().height;        // direct height access karne ke liye, .(dot) notation provide all possible properties
console.log(info);

