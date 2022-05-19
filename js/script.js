// Copyright (c) 2022 Angelo Pintilie All rights reserved
// Created by: Angelo Pintilie
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the number of even numbers in between two given numbers
 */
function calculateGap() {
    // initialize variables
    // set numbers as empty string
    let numbers = " ";
    // extract inputted minimum number
    let inputMin = parseInt(document.getElementById('min-num').value);
    // extract inputted maximum number
    let inputMax = parseInt(document.getElementById('max-num').value);
    // if the inputted min is greater than the max, or they are equal...
    if (inputMin > inputMax) {
        numbers = "The minimum number shouldn't be larger than your max number, you must correct this for the calculation to work.";
    } else if (inputMin == inputMax && inputMin % 2 != 0) {
      // if the inputted min is equal to max and or the inputted number is odd...
        numbers = "Your inputted numbers shouldn't be equal or odd, you must correct this for the calculation to work.";
    }
    // while the inputted min is less than or equal to the max, and if the number is odd, add 1 to it
    while (inputMin <= inputMax) {
        if (inputMin % 2 != 0) {
            // make the counter go up by 1
            inputMin = inputMin + 1
        }
        // break the loop
        {
            break;
        }
    }
    // while inputted min is less than or equal to the max, add 2 to the number and display
    while (inputMin <= inputMax) {
        // make the string of numbers stack on seperate lines
        numbers = numbers + inputMin + "<br>"
        // make the counter rise evenley by 2
        inputMin = inputMin + 2
    }
    // display the gap
    document.getElementById('display-results').innerHTML = numbers
}