let playerOne, playerTwo, playerThree;
const playerOneImage = document.getElementById('playerOneImage');
const playerTwoImage = document.getElementById('playerTwoImage');
const playerThreeImage = document.getElementById('playerThreeImage');


document.getElementById("resultButton").onclick = function (){

    playerOne = Math.floor(Math.random()*6 + 1);
    playerTwo = Math.floor(Math.random()*6 + 1);
    playerThree = Math.floor(Math.random()*6 + 1);

    playerOneImage.classList.remove('hidden');
    playerOneImage.src = `./images/${playerOne}.png`

    playerTwoImage.classList.remove('hidden');
    playerTwoImage.src = `./images/${playerTwo}.png`

    playerThreeImage.classList.remove('hidden');
    playerThreeImage.src = `./images/${playerThree}.png`

}

document.getElementById("resetButton").onclick = function () {

    playerOneImage.classList.add('hidden');
    playerTwoImage.classList.add('hidden');
    playerThreeImage.classList.add('hidden');

}