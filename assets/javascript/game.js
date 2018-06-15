

let randomNumber = Math.floor(Math.random() * 101) + 19;
let userClick = 0;
let greenDiamond = 0;
let pinkPearl = 0;
let pinkDiamond = 0;
let ruby = 0;
let wins = 0;
let losses = 0;

function start() {

    $("#random").html(randomNumber);
    console.log(randomNumber);

    greenDiamond = Math.floor(Math.random() * 12) + 1;
    pinkPearl = Math.floor(Math.random() * 12) + 1;
    pinkDiamond = Math.floor(Math.random() * 12) + 1;
    ruby = Math.floor(Math.random() * 12) + 1;

    $("#greenDiamond").attr("value", greenDiamond);
    $("#pinkPearl").attr("value", pinkPearl);
    $("#pinkDiamond").attr("value", pinkDiamond);
    $("#ruby").attr("value", ruby);
    $('#userClick').empty();
    $('#totalScore').empty();
}

function reset() {
    $('#userClick').empty();
    $('#totalScore').empty();
}


$('.gem-img').on('click', function () {
    var number = ($(this).attr("value"));
    if (userClick <= randomNumber) {
        userClick += parseInt(number);
        console.log(userClick);
        $('#totalScore').text(userClick);
        if (userClick === randomNumber) {
            $("#wins").append(wins);
            wins++;
            $('#wins').text(parseInt(wins));
        } else if (userClick >= randomNumber) {
            $("#lose").append(losses);
            losses++;
            $("#lose").text(parseInt(losses));

        }
    }
});


start();

reset();

/*set each variable to start
I need to set a random number for the number to guess
then set the crystals to be clicked and calculate a random amount for each one
then add each number on crystal click to the totalScore
check the totalScore against the randomNumber
if totalScore and randomNumber are equal then calculate a win
if totalScore is > the randomNumber then calculate one loss
make a game reset*/
