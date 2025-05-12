/** LOGICAL OR OPERATOR and TERNARY OPERATORS **/

// You can assign one of two values easily with
// the OR operator (||) or with a ternary expression (? and :)

// OR can be used with the value is truthy/falsy to say if it 
// is truthy, use that value, otherwise use something else
// let scores = player.scores.length || "No scores yet";

// Ternary expressions are useful when you have two possible 
// values for something based on a condition of some kind
// let recordText = records.length > 1 ? "records" : "record";

// Test Data
let avengers = [
    {
        name: "Steve Rogers",
        aka: "Captain America",
        location: "Brooklyn",
        available: true,
    },
    {
        name: "Bruce Banner",
        aka: "The Incredible Hulk",
        location: null,
        available: false,
    },
    {
        name: "Natasha Romanov",
        aka: "Black Widow",
        location: "S.H.I.E.L.D. Headquarters",
        available: true,
    },
    {
        name: "Tony Stark",
        aka: "Iron Man",
        location: "Stark Tower",
        available: true,
    },
    {
        name: "Thor",
        aka: null,
        location: "Asgard",
        available: false,
    },  
    {
        name: "Clint Barton",
        aka: "Hawkeye",
        location: "Iowa",
        available: false,
    } 
];

// EXAMPLE: Print a readout for each Avenger in the following format:
//      Clint Barton, aka "Hawkeye" - Iowa
// If there is no superhero name, leave that part off
// If there is no location, print "unknown" instead
avengers.forEach(avenger => {
    let superName = avenger.aka ? `, aka "${avenger.aka}"` : "";
    let location = avenger.location || "unknown";
    console.log(`${avenger.name}${superName} - ${location}`);
});


// YOUR TURN!

// TODO: Print a readout for each Avenger that states whether they 
// are available or not, using their superhero name if they 
// have it, otherwise use their given name

