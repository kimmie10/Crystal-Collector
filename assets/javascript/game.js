let randomNumber;
let userClick;
let greenDiamond;
let pinkPearl;
let pinkDiamond;
let ruby;
let wins = 0;
let losses = 0;

/*Set a game start set each variable to start
make a game reset
I need to set a random number for the number to guess
then set the crystals to be clicked and caculate a random amount for each one
then add each number on crystal click to the totalScore
check the totalScore against the randomNumber
if totalScore and randomNumber are equal then calculate a win
if totalScore is > randomNumber then calculate one loss*/

$(function(){
    function start() {
        userClick = 0;
        randomNumber = Math.floor(Math,random() * 120) + 19;
        greenDiamond = Math.floor(Math,random() * 12) + 1;
        pinkPearl = Math.floor(Math,random() * 12) + 1;
        pinkDiamond = Math.floor(Math,random() * 12) + 1;
        ruby = Math.floor(Math,random() * 12) + 1;
        


    }

    $('.gem-img').on('click', function() {
       $('')
    })

});

function newFunction() {
    $("#random").html(randomNumber);
    console.log(randomNumber);
}
