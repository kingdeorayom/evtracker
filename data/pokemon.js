const pokemon = [
    {
        id: 1,
        name: "Bulbasaur",
        category: "Seed",
        sprite: require('../assets/1.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 0 },]
    },
    {
        id: 2,
        name: "Ivysaur",
        category: "Seed",
        sprite: require('../assets/2.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 1, spd: 1, spe: 0 },]
    },
    {
        id: 3,
        name: "Venusaur",
        category: "Seed",
        sprite: require('../assets/3.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 2, spd: 1, spe: 0 },]
    },
    {
        id: 4,
        name: "Charmander",
        category: "Lizard",
        sprite: require('../assets/4.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 1 },]

    },
    {
        id: 5,
        name: "Charmeleon",
        category: "Flame",
        sprite: require('../assets/5.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 1, spd: 0, spe: 1 },]
    },
    {
        id: 6,
        name: "Charizard",
        category: "Flame",
        sprite: require('../assets/6.png'),
        yield: [{ hp: 0, atk: 0, def: 0, spa: 3, spd: 0, spe: 0 },]
    }
]

export default pokemon