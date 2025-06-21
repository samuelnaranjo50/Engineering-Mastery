
var astronaut = {
    name: "Sam",
    age: 18,
    lastMessage: "I love you mom!",
    planetDestination: "Mars",
    ["Number of Spaceship"]: 102,
    missionDuration: 4,
}

astronaut.planetDestination = "Jupiter";

astronaut["Number of Spaceship"] = 102;
astronaut["Extra property:**"] = 'Random text';


var ageAfterMission = astronaut.age + astronaut.missionDuration + astronaut['Number of Spaceship'];

console.log('This is the astronaut age before mission:', astronaut.age);
console.log('This is the astronaut age after mission:', ageAfterMission);


console.log('This is inside the astronaut object:', astronaut);


console.log('Specific item value:', astronaut['Number of Spaceship']);