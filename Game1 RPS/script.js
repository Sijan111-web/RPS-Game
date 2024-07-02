let user_choice;
let comp_choice;
let you=0;
let comp=0;
your_score=document.querySelector("#you");
comp_score=document.querySelector("#comp");
let comment_box=document.querySelector(".comment_box");
user_choice=document.querySelectorAll(".choice");

user_choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        user_choice=choice.getAttribute("id");

        playGame(user_choice);
    })
    
});

const drawGame=()=>{
   // console.log("Game was draw. Try again!");
    comment_box.innerText="Game was draw. Try again!";
    comment_box.style.background="black";
}

const showresult=(userWin)=>{
    if(userWin){
        console.log(`you: ${user_choice},comp:${comp_choice}. Congratulations!You won the match`);
        you=you+1;
        your_score.innerText=you;
        comment_box.innerText=`You won!`;
        comment_box.style.background="green";
        
    }
    else{
        console.log(`you: ${user_choice},comp:${comp_choice}.You lose the match`);
        comment_box.innerText= `you lose!`;
        comment_box.style.background="red";
        comp=comp+1;
        comp_score.innerText=comp;
    }
}


function playGame(user_choice){
    let options=["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    comp_choice=options[index];
    console.log(`you:${user_choice}, computer:${comp_choice}`);

if(comp_choice===user_choice){
    drawGame();
}

else{
    let userWin=true;
    if(comp_choice==="rock"){
    userWin=user_choice==="paper"?true:false;
    } else if(comp_choice==="paper"){
        userWin=user_choice==="scissor"?true:false;

    }else{
        userWin=user_choice==="rock"?true:false;
    }
    showresult(userWin);
}

 
}
