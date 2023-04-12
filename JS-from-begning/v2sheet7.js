// intro to events
//click
// event means kuch kaam hona
// important event -  mouse click, input and keyboard
// event add karne ke 3 tareeke
// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//     console.log("you clicked");                      // old method does not used
// }

// new method ---> addEventListner
// function clickMe(){
//     console.log("Clicked me");                   also difne directly in addEventlistner
// }
// btn.addEventListener("click",clickMe);
// btn.addEventListener("click",function(){
//     console.log("Clicked me!!!");
// });

// with arrowfunction //
// btn.addEventListener("click",()=>{
//     console.log("Clicked me!!!");
// });


// this keyword //
// const btn = document.querySelector(".btn-headline");
//  btn.addEventListener("click",()=>{
//         console.log("Clicked me!!!");                           // in case of arrow function value of this is window
//         console.log("value of this", this);
//     });

// btn.addEventListener("click",function(){
//     console.log("Clicked me!!!");                           // in case of function declaration value of this is button itself
//     console.log("value of this", this);
// });

// button event handling                // domhtml2 file//
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){
//     console.log("clicked me");
// })

// if you want to run same function on all button //
// const allButton = document.querySelectorAll("button");
// console.log(allButton);
// for(let button of allButton){
    // console.log(button);
//     button.addEventListener("click", function(){
//         console.log(this);
//         console.log(this.textContent);
//         console.dir(this);

        // console.log("you clicked !!!!");
//     })
// }

// forEach method //
// allButton.forEach(function(button){
//     button.addEventListener("click", function(){
//                 console.log(this);
//                 console.dir(this);
// });
// })

// event object //
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(){            // agar normal function ke place pe yha arrow function lagate hai to this yha window ho jayega
//         console.log(this);                                  // this means yha button aayega
//     })

// jab bhi kisi bhi element pe event listner add hoga 
// JS engine ---> line by line code ko execute karta hai
// browser ---> JS engine + extra features bi hai
// browser ---> JS engine + webApi
// jab browser ko pata chala ki user ne event perform kiya
// jo hum listen kar rhe the to
// browser 2 kaam karega 
// 1.) callback function hai vo JS Engine ko dega..
// 2.) callback function ke sath vo(browser) jo event hua hai uske information bhi dega
// ye info(point no. 2) hume ek object ki form mien milegi

// const allButton = document.querySelectorAll("button");
// for(let button of allButton){
//     button.addEventListener("click", (e)=>{
//         console.log(e.target);
//         console.log(e.currentTarget);

//     })
// }
// target ka matlab hai kis element ne event ko trigger kara
// current target ka matlab hai kis element pe humne event listner attach kiya tha