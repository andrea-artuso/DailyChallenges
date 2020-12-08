//CATCHING THE DOM
var overText = document.getElementById('displayText');
var menuButton = document.getElementById('custom');
var clearButton = document.getElementById('clear');

var radioWhite = document.getElementById('white');
var radioBlack = document.getElementById('black');
var radioRed = document.getElementById('red');
var radioBlue = document.getElementById('blue');

var textInput = document.getElementById('nameInput');

var radioTextWhite = document.getElementById('textWhite');
var radioTextBlack = document.getElementById('textBlack');
var radioTextRed = document.getElementById('textRed');
var radioTextBlue = document.getElementById('textBlue');

var prevButton = document.getElementById('preview');


//Open customization menu by clicking on the "Customize" button
menuButton.addEventListener("click", function(){
    if (document.getElementById('customization-settings').style.display != "block"){
        document.getElementById('customization-settings').style.display = "block";
    }
    else {
        document.getElementById('customization-settings').style.display = "none";
    }

});

//Clear text input
clearButton.addEventListener("click", function(){
    textInput.value = " ";
});


//Get hoodie color value
function getHoodieColor(){
    if(radioWhite.checked == true){
        alert("Hoodie color: WHITE");
    } 
    if(radioBlack.checked == true){
        alert("Hoodie color: BLACK");
    } 
    if(radioRed.checked == true){
        alert("Hoodie color: RED");
    } 
    if(radioBlue.checked == true){
        alert("Hoodie color: BLUE");
    } 
}


//Print selected text on hoodie
function printText(){
    overText.innerHTML = textInput.value;
}


//Get text color value
function getTextColor(){
    if(radioTextWhite.checked == true){
        overText.style.color = "white";
    } 
    if(radioTextBlack.checked == true){
        overText.style.color = "black";
    } 
    if(radioTextRed.checked == true){
        overText.style.color = "red";
    } 
    if(radioTextBlue.checked == true){
        overText.style.color = "blue";
    } 
}


//Display customization on preview button click
prevButton.addEventListener("click", function(){
    getHoodieColor();
    printText();
    getTextColor();
});