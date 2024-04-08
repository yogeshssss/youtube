let btn1=document.querySelector("#btn1");

btn1.addEventListener("click",(e)=>{
    console.log("button was clicked-handler1");
    console.log(e);
    console.log(e.type);
})
btn1.addEventListener("click",()=>{
    console.log("button was clicked-handler2");
})
const btn3=()=>{
    console.log("button was clicked-handler3");
}
btn1.addEventListener("click",btn3);

btn1.addEventListener("click",()=>{
    console.log("button was clicked-handler4");
})
btn1.removeEventListener("click",btn3);