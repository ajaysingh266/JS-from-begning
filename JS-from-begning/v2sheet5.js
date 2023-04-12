// check kitne classes de rakhi hai 
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);                 //to check all classes of section

// add a class from JS   //
// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);

// remove class from code//
// sectionTodo.classList.remove("container");

// to check whether class exist or not //
// const classExist = sectionTodo.classList.contains("container");                        // gives boolean value only
// console.log(classExist);


// toggle classes //
// const toggle = sectionTodo.classList.toggle("bg-dark");                             // agar class pehle se ni hai to add kar dega
// console.log(toggle);
// sectionTodo.classList.toggle("bg-dark");                                            // agar class pehle se hai to remove kar dega  


// header ke sath classlist //
// const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");




// Add HTML element using javascript // 

// innerHTML to add html element//
//  const todoList = document.querySelector(".todo-list");
//  console.log(todoList.innerHTML);
//  todoList.innerHTML="<li>New Todo</li>";                         // this command remove preivious li item and add this new li item
// todoList.innerHTML = todoList.innerHTML + "<li>New Todo</li>";       // this command add new todo list with previous list
// todoList.innerHTML +=  "<li>New Todo</li>";                     // shortcut to add with previous item.
// todoList.innerHTML +=  "<li>New Todo3</li>";
// todoList.innerHTML +=  "<li>New Todo4</li>";

// when we should use it, when we should not
// innerHTML effect performance so we should avoid it 
// use kab karna hai... jb poora ka poora innerHTML change karna ho


// these properties used to change innerHTML
// document.crateElement()
// append           -------> always add in last
// prepand          -------> always add in start
// remove           -------> remove any element

const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");                   // to add new item 
const newTodoItemText = document.createTextNode("New Todo"); 
newTodoItem.textContent = "New Todo";                           // anotherway to add content       
// newTodoItem.appendChild(newTodoItemText);                           // add text to li item      // we can use append only in place of appendChild
todoList.append(newTodoItem);
console.log(newTodoItem);
console.log(todoList);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

// before  //
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");                   
// newTodoItem.textContent = "New Todo";
// todoList.before(newTodoItem);

// after    //
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");                   
// newTodoItem.textContent = "New Todo";
// todoList.after(newTodoItem);


//elem.insertAdjacentHTML(where, html)
// beforebegin      ---> alternate of before
// afterbegin     ---> alternate of prepand
// beforeend       ---> alternate of append
// afterend

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Students</li>")                 // working as append // directly insert element with text
// todoList.insertAdjacentHTML("afterbegin", "<li>Teach Students</li>")   
// todoList.insertAdjacentHTML("beforebegin", "<li>Teach Students</li>")  
// todoList.insertAdjacentHTML("afterend", "<li>New Node</li>")  


// clone nodes //
// const ul =  document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo1";
// ul.append(li);
// console.log(ul.append);
// ul.prepend(li);             // line no. 96 or 98 ya to append hoga ya prepend hoga ek hi hoga... // dono kare ke liye clone karna hoga

// clone node
// const li2 = li.cloneNode(true);         // true means deep clone, jo iske child hai textnode vo bi clone hoga
// ul.prepend(li2); 
