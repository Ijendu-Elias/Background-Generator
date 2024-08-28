// //crrating add cat list to the shoping list, code will add to cart and load data
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// //create input length and pass it as a function
// function inputLength(){
//                  return input.value.length;
// }

// //create a function for create element for li and Ul with text input
// function createElementAndTextInput(){
//                 var li = document.createElement("li");
//                 li.appendChild(document.createTextNode(input.value));
//                 ul.appendChild(li);
//                 input.value = ""; 

// }


// button.addEventListener("click", ()=>{
//     if(inputLength() > 0){ //checking if input is empty without words or character let it return null
//         // console.log(input.value);
//         createElementAndTextInput();
//     }
//     })



//     //lets create a keypress event fuction for empty keyboard strings for input and keycode
//     input.addEventListener("keypress", (event)=>{
//         if(inputLength() > 0 && event.keycode ===13){ //checking if input is empty without words or character let it return null
//             // console.log(input.value);
//             createElementAndTextInput();
//         }
//         })
    


//START HERE 
// //this Js script is or backgorund generator . code starts here with funtion wrapping
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");// classname .color
var color2 = document.querySelector(".color2");// class name .color2
var body = document.getElementById("gradient");

//create  afunction to for body and pass it inside adeventlistener
function gradientPass (){
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")"; 
    css.textContent = body.style.background + ";";
}

//adding event listener function to the color1 inputs 
color1.addEventListener("input", gradientPass)
    // body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")"; 
// console.log(color1.value);


//adding event listener function to the color2 inputs 
color2.addEventListener("input", gradientPass)
    // body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")"; 
    // console.log(color2.value);

// OR

// //this Js script is or backgorund generator . code starts here .....

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");// classname .color
// var color2 = document.querySelector(".color2");// class name .color2
// var body = document.getElementById("gradient");

// //adding event listener function to the color1 inputs 
// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")"; 
//     })
// // console.log(color1.value);


// //adding event listener function to the color2 inputs 
// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")"; 
//     // console.log(color2.value);
// })

//END HERE 














































// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// //create input length and pass it as a function
// function inputLength(){
//     return input.value.length;
// }

// //create a function for create element for li and Ul with text input
// function createElementAndTextInput(){
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//      ul.appendChild(li);
//      input.value = ""; 

// }


// button.addEventListener("click", ()=>{
//     if(inputLength() > 0){ //checking if input is empty without words or character let it return null
//         // console.log(input.value);
//         createElementAndTextInput();
//     }
//     })

//     //lets create a keypress event fuction for empty keyboard strings for input and keycode
//     input.addEventListener("keypress", (event)=>{
//         if(inputLength() > 0 && event.keycode ===13){ //checking if input is empty without words or character let it return null
//             // console.log(input.value);
//             createElementAndTextInput();
//         }
//         })
    


//OR we can create this like this down.


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", ()=>{
//     if(input.value.length > 0){ //checking if input is empty without words or character let it return null
//         // console.log(input.value);
//         var li = document.createElement("li");
//        li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = ""; 
//     }
//     })

//     //lets create a keypress event fuction for empty keyboard strings for input and keycode
//     input.addEventListener("keypress", (event)=>{
//         if(input.value.length > 0 && event.keycode ===13){ //checking if input is empty without words or character let it return null
//             // console.log(input.value);
//             var li = document.createElement("li");
//            li.appendChild(document.createTextNode(input.value));
//             ul.appendChild(li);
//             input.value = ""; 
//         }
//         })
    






// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("mouseenter", function(){
// console.log("Click!!!");

// })
























// var database = [
//     {
//         username: "lla",
//         password: "Jide"
//     },
//     {
//         username: "Elly",
//         password: "123"
//     },
//     {
//         username: "Max",
//         password: "ppp"
//     },
//     {
//         username: "elias",
//         password: "ppp"
//     }
    
// ];

// var newFeed = [
//     {
//         username: "Blessed",
//         timeline: "Ofor"
//     },

//     {
//         username: "Andre",
//         timeline: "ok javascript",
//     },
//     {
//         username: "Ada",
//         timeline: "ok css is cool"
//     }
// ];
// //username is that from the input, while user = that for the function
// function isUserValid(user, pass){
//     for(var i=0; i < database.length; i++){
//     if(database[i].username===user && database[i].password===pass){
//         return true;
//     }
      
//     } 
//     return false;

// }
// function signIn(user, pass){
//     if (isUserValid(user, pass)){
//     console.log(newFeed);
// }else{
//     alert("Sorry incrorrect username and password");
// }
// }
//         var usernamePromt = prompt("Whats\' s your username?");
//         var passwordPromt = prompt("Whats \' s your password?");
//  signIn (usernamePromt, passwordPromt);
    

