let userbox=document.querySelector("#user");
let outlook=document.querySelector("#outlook");
let userChoice=document.querySelector("#user-choice");
let computerChoice=document.querySelector("#computer-choice");
let score=document.querySelector("#score");
let reload=document.querySelector("#reload");
let resultbox=document.querySelector("#result");

// setimage
function setImage(user,computer){
    // user image
    if(user=="stone"){
        userChoice.querySelector("img").src="images/Stone.jpg";
    }
    else if(user=="paper"){
        userChoice.querySelector("img").src="images/Paper.jpg";
    }
    else if(user=="scissor"){
        userChoice.querySelector("img").src="images/Scissor.jpg";
    }

    // computer image
    if(computer=="stone"){
        computerChoice.querySelector("img").src="images/Stone.jpg";
    }
    else if(computer=="paper"){
        computerChoice.querySelector("img").src="images/Paper.jpg";
    }
    else if(computer=="scissor"){
        computerChoice.querySelector("img").src="images/Scissor.jpg";
    }
}

// result
function result(user,computer){
    if(user==computer){
        score.innerText="It's a Tie";
    }else{
        if(user=="stone"){
            if(computer=="paper"){
                score.innerText="Computer Won!";
            }
            else{
                score.innerText="You Won!";
            }
        }

        else if(user=="paper"){
            if(computer=="scissor"){
                score.innerText="Computer Won!";
            }
            else{
                score.innerText="You Won!";
            }
        }

        else if(user=="scissor"){
            if(computer=="stone"){
                score.innerText="Computer Won!";
            }
            else{
                score.innerText="You Won!";
            }
        }
    }
}

// user and comuter choice
function userfun(e){
    let user=e.id;
    let ary=[ "stone", "paper", "scissor"];
    let min=0;
    let max=3;
    let random=Math.floor(Math.random()*(max-min)+min);
    let computer=ary[random];
    check(user,computer);
}

function check(user,computer){
    userbox.style.display="none";
    outlook.style.display="block";
    setTimeout(() => {
        resultbox.style.display="flex";
    }, 500);
    
    // setimage function
    setImage(user, computer);
    // result function
    result(user, computer);      
}

reload.addEventListener("click",()=>{
    location.reload();
});