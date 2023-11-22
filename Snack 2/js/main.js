'use strict';

// DATA
const teams = [
    {
        'Name': 'Juventus',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'AC Milan',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Inter Milan',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Napoli',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Roma',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Lazio',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Fiorentina',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Atalanta',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Sassuolo',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    },
    {
        'Name': 'Torino',
        'Goals Scored': 0,
        'Fouls Suffered': 0
    }
];

// EXECUTION
// Assign random goals & fouls between 0 and 10
teams.forEach(team => {
    team["Goals Scored"] = Math.floor(Math.random() * 11);
    team["Fouls Suffered"] = Math.floor(Math.random() * 11);
});

// Create new names & fouls array
const teamsNew = teams.map(({ Name, "Fouls Suffered": Fouls }) => ({ Name, Fouls }));

console.log(teamsNew);