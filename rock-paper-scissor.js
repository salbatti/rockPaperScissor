let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
  };

  /*
if(score ===null){
  score={
    wins:0,
    losses:0,
    ties:0
  };
}
  */
      function playGame(playerMove){
  const computerMove=pickComputerMove();



    let result= '';
    if(playerMove==='rock'){
      if(computerMove ==='rock'){
        result= 'Tie'
      }
      else if(computerMove ==='paper'){
        result='You lose.'
      }
      else if(computerMove==='scissors'){
        result='You won.'

      }
    
    }
    else if(playerMove==='paper'){
          if(computerMove ==='rock'){
            result= 'You won.'
          }
          else if(computerMove ==='paper'){
            result='Tie .'
          }
          else if(computerMove==='scissors'){
            result='You lose.'
          }
     }

    else if(playerMove==='scissors'){
      if(computerMove ==='rock'){
        result= 'You lose.'
      }
      else if(computerMove ==='paper'){
        result='You won.'
      }
      else if(computerMove==='scissors'){
        result='Tie .'
      }
    }
    if(result==="You won."){
      score.wins+=1;
    }
    else if(result==="You lose."){
      score.losses+=1;
    }
    else if(result ==="Tie ."){
      score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));


    updateScoreElement();
    updateResult(result);
    updateComMan(playerMove,computerMove);
    // alert(`You picked ${playerMove}.computer picked ${computerMove} and the result is ${result}
    // Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}
    // `)



}

function updateScoreElement(){
  document.querySelector('.js-score')
 .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

}
function btnClick(){
//   document.querySelector('.js-score')
//  .innerHTML=``;
 document.querySelector('.js-stats')
 .innerHTML=``;
 document.querySelector('.js-result')
 .innerHTML=``;


}
function updateResult(result){
  document.querySelector('.js-stats')
 .innerHTML=`${result}`;

}
function updateComMan(playerMove,computerMove){
  document.querySelector('.js-result')
 .innerHTML=` You
<img class="rock-cls" src="./media/${playerMove}-emoji.png" alt="">
<img class="scissors-cls" src="./media/${computerMove}-emoji.png" alt="">
computer`;
}
 function pickComputerMove(){
 const randomNumber= Math.random();
 let computerMove='';
  

  if (randomNumber>=0 &&  randomNumber< 1/3){
  computerMove='rock';
  }
  else if (randomNumber>=1/3 &&  randomNumber< 2/3){
    computerMove='paper';
  }
  else if (randomNumber>=2/3 &&  randomNumber< 1){
    computerMove='scissors';
  }
  
return computerMove;
}