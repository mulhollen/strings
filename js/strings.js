"use strict";

var input = $('#input');
var button = $('#button');
var reverse = $('#reverse');
var alpha = $('#alpha');
var kayak = $('#kayak');
var testString = "";

function reversal(string) {
    let backwards = string.split("").reverse().join("");
    
    reverse.show().html(`<i>${testString}</i> backwards is: <i>${backwards}</i>`);
}

function alphabits(string) {
    let alphaOrder = string.split("").sort();

    alpha.show().html(`This is your string in alphabetical order: <i>${alphaOrder}</i>`);
}

function palindrome(string) {
    let backwards = string.split("").reverse().join("");

    if(testString === backwards){
        kayak.show().html(`Also, <i>${testString}</i> is a palindrome`);
    } else {
        kayak.hide();
    }
}


function begin() {
    testString = input.val();
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
    // reset the input to nothin
    input.val("");
}

// event listeners

// hide divs on page load
$(document).ready(() => {
    reverse.hide();
    alpha.hide();
    kayak.hide();
});

input.keypress((event) => {
    var key = event.keyCode;
    
    // run function on enter keypress
    if (key == 13){
        begin();
    }
    // only accept capital letters || lowercase letters || backspace || spacebar
    return ((key >= 65 && key <= 90) || (key >= 95 && key <= 122) || key == 8 || key == 32);
});


button.click(() => {
    begin();
});
