// Events behind the scene //
// console.log("script start");
// const allButton = document.querySelectorAll(".my-buttons button");
// console.log(allButton);
// allButton.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         console.log(e.currentTarget.textContent);
//     })
// })
// console.log("end");

// const allButton = document.querySelectorAll(".my-buttons button");
// allButton.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         // console.log(e.currentTarget.textContent);
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })


// keypress event //
// mouseover event //

//event bubbling /  event propogation    // event first apply on  child to parent to grandparent if event attach with all
// event capturing              //event first apply on grandparent to parent to child if event attach with all
// event delegation            //event bubbles from child to parent with the help of e(event)