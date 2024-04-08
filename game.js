let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const gencomputerGame=()=>{
   const options=["rock","paper","scessior"];
   const ranIdx=math.floor(math.random()*3);
   return options[ranIdx];
}

const playGame=(userchoice)=>{
console.log(userchoice);
}
const compchoice=gen

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);

    })
})