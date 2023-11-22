'use strict';

// DATA
const teams = [
    {
        name: 'Juventus',
        goals: 0,
        fouls: 0
    },
    {
        name: 'AC Milan',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Inter Milan',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Fiorentina',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Sassuolo',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Torino',
        goals: 0,
        fouls: 0
    }
];

// EXECUTION
// Assign random goals & fouls between 0 and 10
teams.forEach(team => {
    team['goals'] = Math.floor(Math.random() * 11);
    team['fouls'] = Math.floor(Math.random() * 11);
});

// Create new names & fouls array
const teamsNew = teams.map(({ name, fouls }) => ({ name, fouls }));

console.log(teamsNew);