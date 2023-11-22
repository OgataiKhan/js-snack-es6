'use strict';

// DATA
const racingBicycles = [
    {
        name: 'AeroX BladeRunner',
        weight: 6
    },
    {
        name: 'Quantum Vortex R1',
        weight: 8
    },
    {
        name: 'Rising Firehawk',
        weight: 5
    },
    {
        name: 'SkyRider Zephyr',
        weight: 7
    },
    {
        name: 'Orion Flash O2',
        weight: 9
    },
    {
        name: 'Neptune Nightcrawler NX',
        weight: 5
    },
];

// EXECUTION
let lightestBike = racingBicycles[0];

// Find one of the lightest bicycles
racingBicycles.forEach(bike => {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
});
// Save lightest weight as a variable
const { weight: lightestBikeWeight } = lightestBike;

// Create an array of all the bicycles with the lowest weight
const lightestBikesArray = racingBicycles.filter(({ weight }) => weight === lightestBikeWeight);

// Select the ol in the html
const list = document.getElementById('content');
// Initialize an empty content variable
let listContent = '';
// Add li elements to content
lightestBikesArray.forEach(({ name, weight }) => {
    listContent += `<li>${name}, with a weight of ${weight} kg</li>`;
});
// Add content to the html
list.innerHTML = listContent;