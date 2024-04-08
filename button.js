let modebtn=document.querySelector("#mode");
let crrmode="light";

modebtn.addEventListener("click",()=>{
   if(crrmode === "ligth"){
    crrmode = "dark";
    document.querySelector("body").style.backgroundColor="black";
   } else{
    crrmode = "light";
    document.querySelector("body").style.backgroundColor="white";
   }
   console.log(crrmode);
});
