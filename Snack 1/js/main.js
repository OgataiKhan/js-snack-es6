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

let lightestBike = racingBicycles[0];

racingBicycles.forEach(bike => {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
});

const lightestBikeWeight = lightestBike.weight;
const lightestBikesArray = racingBicycles.filter(bike => bike.weight === lightestBikeWeight);

