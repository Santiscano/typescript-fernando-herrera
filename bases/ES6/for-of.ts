(()=> {

    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, thor, captainAmerica ];

    // for
    for ( let i=0 ; i < avengers.length; ++i ) {
        console.log( avengers[i].name );
    }

    // for of
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon );
    }

    // forEach
    avengers.forEach((avenger) => console.log(avenger.name));


})()