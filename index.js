
/********************* Angela's Code OP! *************************/

// Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


// Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Heading

if (randomNumber1 > randomNumber2) {

    document.querySelector("#heading").innerHTML = "🚩 Player 1 Wins!";
    
} else if (randomNumber1 === randomNumber2) {

    document.querySelector("#heading").innerHTML = "Draw!"

} else if (randomNumber1 < randomNumber2) {

    document.querySelector("#heading").innerHTML = "Player 2 Wins! 🚩";

}



/********************* My Code *************************/

/********************* Player 1 ************************/

// Random number between 1 and 6
/* 

var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

if (randomNumber1 === 1) {
    
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
    // document.getElementsByClassName("img1")[0].src = "images/dice1.png";
    // document.querySelector(".img1").src = "images/dice1.png";

} else if (randomNumber1 === 2) {

    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
    // document.getElementsByClassName("img1")[0].src = "images/dice2.png";
    // document.querySelector(".img1").src = "images/dice2.png";
    
} else if (randomNumber1 === 3) {

    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
    // document.getElementsByClassName("img1")[0].src = "images/dice3.png";
    // document.querySelector(".img1").src = "images/dice3.png";

} else if (randomNumber1 === 4) {

    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
    // document.getElementsByClassName("img1")[0].src = "images/dice4.png";
    // document.querySelector(".img1").src = "images/dice4.png";

} else if (randomNumber1 === 5) {

    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
    // document.getElementsByClassName("img1")[0].src = "images/dice5.png";
    // document.querySelector(".img1").src = "images/dice5.png";

} else if (randomNumber1 === 6) {

    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
    // document.getElementsByClassName("img1").src = "images/dice6.png";
    // document.querySelector(".img1").src = "images/dice6.png";

}

/********************* Player 2 ************************/

/* 

var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

if (randomNumber2 === 1) {
    
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
    // document.getElementsByClassName("img2")[0].src = "images/dice1.png";
    // document.querySelector(".img2").src = "images/dice1.png";

} else if (randomNumber2 === 2) {

    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
    // document.getElementsByClassName("img2")[0].src = "images/dice2.png";
    // document.querySelector(".img2").src = "images/dice2.png";
    
} else if (randomNumber2 === 3) {

    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
    // document.getElementsByClassName("img2")[0].src = "images/dice3.png";
    // document.querySelector(".img2").src = "images/dice3.png";

} else if (randomNumber2 === 4) {

    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
    // document.getElementsByClassName("img2")[0].src = "images/dice4.png";
    // document.querySelector(".img2").src = "images/dice4.png";

} else if (randomNumber2 === 5) {

    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
    // document.getElementsByClassName("img2")[0].src = "images/dice5.png";
    // document.querySelector(".img2").src = "images/dice5.png";

} else if (randomNumber2 === 6) {

    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
    // document.getElementsByClassName("img2").src = "images/dice6.png";
    // document.querySelector(".img2").src = "images/dice6.png";

}

/********************* Heading ************************/

/* 

if (randomNumber1 > randomNumber2) {

    document.querySelector("#heading").innerHTML = "🚩Player 1 Wins!";
    
} else if (randomNumber1 === randomNumber2) {

    document.querySelector("#heading").innerHTML = "Draw!"

} else if (randomNumber1 < randomNumber2) {

    document.querySelector("#heading").innerHTML = "Player 2 Wins!🚩";

}

*/