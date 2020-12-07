var onlineUser, prevDiceRoll, gamePlaying;
var counter = 0;
var currentScore = [0, 0];
var totalScore = [0, 0];
init();

document.querySelector('.btn-roll-dice').addEventListener('click', function () {
    
  if (gamePlaying) {
    counter++;
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    const dice4 = Math.floor(Math.random() * 6) + 1;  

    document.getElementById('dice1').style.display = 'block';
    document.getElementById('dice2').style.display = 'block';
    document.getElementById('dice3').style.display = 'block';
    document.getElementById('dice4').style.display = 'block';  
    document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice2').src = 'dice-' + dice2 + '.png';
    document.getElementById('dice3').src = 'dice-' + dice3 + '.png';
    document.getElementById('dice4').src = 'dice-' + dice4 + '.png';  
    
    if (dice1 === 1 || dice2 === 1) {
        currentScore[0] = 0;
    }  else if (dice1 === dice2){
        currentScore[0] = (dice1 + dice2) * 2;
    }  else { 
        currentScore[0] = dice1 + dice2;
    }
    if (dice3 === 1 || dice4 === 1) {
        currentScore[1] = 0;
    }  else if (dice3 === dice4){
        currentScore[1] = (dice3 + dice4) * 2;
    } else {
        currentScore[1] = dice3 + dice4;
    }
      totalScore[0] += currentScore[0];
      totalScore[1] += currentScore[1];
      document.querySelector('#ongoing-0').textContent = currentScore[0];
      document.querySelector('#ongoing-1').textContent = currentScore[1];
      document.querySelector('#number-0').textContent = totalScore[0];
      document.querySelector('#number-1').textContent = totalScore[1];
    if(counter === 3){
        const delay = 10;
        gamePlaying = false;
        
        const popup = document.getElementById('pop-up');
        const closePopup = document.getElementById('btn-close');
        
        setTimeout( function(){
            $("#pop-up").fadeIn(1000);
        }, delay);
        
        closePopup.addEventListener("click", function(){
           popup.style.display = "none"; 
        });
        counter = 0;
    }

  }

});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

  gamePlaying = true;
  onlineUser = 0;
  totalScore[0] = 0;
  totalScore[1] = 0;    

  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
  document.getElementById('dice3').style.display = 'none';
  document.getElementById('dice4').style.display = 'none';    

  document.getElementById('number-0').textContent = '0';
  document.getElementById('number-1').textContent = '0';
  document.getElementById('ongoing-0').textContent = '0';
  document.getElementById('ongoing-1').textContent = '0';

  document.getElementById('name-0').textContent = 'MYSELF';
  document.getElementById('name-1').textContent = 'OPPONENT';

  document.querySelector('.myself').classList.remove('online');
  document.querySelector('.opponent').classList.remove('online'); 
  document.querySelector('.opponent').classList.remove('online');
  document.querySelector('.myself').classList.add('online');

}