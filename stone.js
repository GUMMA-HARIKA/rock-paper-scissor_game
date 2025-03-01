let userscore=0;
let compscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userscor=document.querySelector('#user-score');
const compscor=document.querySelector('#comp-score');
const gencompchoice=()=>{
    const options=['rock','paper','scissor'];
    const ranId=Math.floor(Math.random()*3);
    return options[ranId];

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscor.innerText=userscore;
        msg.innerText=`YOU WIN ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor='green'

    }
    else{
        compscore++;
        compscor.innerText=compscore;
        msg.innerText=`COMPUTER WIN ${compchoice} beats your ${userchoice}.`;
       msg.style.backgroundColor='red'
    }

}
const drawGame=()=>{
    msg.innerText='GAME WAS DRAW';
    msg.style.backgroundColor='black'
}
const playGame=(userchoice)=>{
const compchoice=gencompchoice();
if(userchoice===compchoice){
drawGame();
}
else{
    let userwin=true;
    if(userchoice==='rock'){
        userwin=compchoice==='paper'?false:true;
    }
    else if(userchoice==='paper'){
        userwin=compchoice==='scissorr'?false:true;
    }
    else {
        userwin=compchoice==='rock'?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
}
}
choices.forEach((choice)=>{
    
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute('id');
//console.log('choice was clicked',userchoice);
playGame(userchoice);
    });
});