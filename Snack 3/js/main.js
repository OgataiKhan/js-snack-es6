'use strict';

// FUNCTION
function takeSection(arr, lowerBoundary, upperBoundary) {
    return arr.filter((element, index) => index >= lowerBoundary && index <= upperBoundary);
}

// DATA
const norseGods = ['Odin', 'Loki', 'Freyr', 'Frejya', 'Baldr', 'Tyr', 'Thor', 'Heimdall']

// EXAMPLE APPLICATION
const norseGodsSection = takeSection(norseGods, 3, 5);
console.log(norseGodsSection);