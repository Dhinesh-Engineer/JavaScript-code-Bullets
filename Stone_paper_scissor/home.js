var player;
var playerScore=0;
var computer;
var computerScore=0;

var choices=["stone","paper","scissor"];

window.onload=function(){
    for (let index = 0; index < 3; index++) {
        let c = document.createElement("img");
        c.id =choices[index];
        console.log(choices[index]);
        c.src=choices[index] + ".png";
        c.addEventListener("click",selectC);
        document.getElementById("cid").append(c);
    }
}

function selectC() {
    player =this.id;
    console.log(player);
    let images = `<img src="./${player}.png">`;
    // document.getElementById("pb-id").src = player+".png";
    console.log(player);
    document.getElementById("pb-id").innerHTML= images;


    computer = choices[Math.floor(Math.random()*3)];
    let abc =`<img src ="./${computer}.png">`;
    // document.getElementById("cb-id").src = computer+ ".png";
    console.log(computer);
    document.getElementById("cb-id").innerHTML=abc;



    if (player==computer) {
        playerScore+=1;
        computerScore+=1;
    }else if (player=="stone") {
        if(computer=="scissors"){
            playerScore+=1;
        }else if(computer =="paper"){
            computerScore+=1;
        }
    }else if (player=="scissors") {
        if(computer=="paper"){
            playerScore+=1;
        }else if(computer =="stone"){
            computerScore+=1;
        }
    }else if (player=="paper") {
        if(computer=="stone"){
            playerScore+=1;
        }else if(computer =="scissors"){
            computerScore+=1;
        }
    }

    document.getElementById("p-mark").innerText=playerScore;
    document.getElementById("c-mark").innerText = computerScore;

    if(playerScore==10){
        alert("Player Wins");
        window.location.reload();
    }else if(computerScore == 10){
        alert("Computer Wins");
        window.location.reload();
    }

}