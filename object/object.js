let flower = {
    "name" : "Sunflower",
    "colour" : "Yellow",
};

flower["name"];
Object.keys(flower);

console.log(flower);
console.log(flower["name"]);
console.log(Object.keys(flower));

/*
let flower = {
    name : "Sunflower",
    colour : "Yellow",
};

let flower = {
    name : "Sunflower",
    "two colour" : "Yellow",
};
*/

let color = {};
color["white"] = "white";
color["yellow"] = "yellow";
color["orange"] = "orange";
color["pink"] = "pink";

console.log(color);

color.blue = "blue";
color.purple = "purple";

console.log(color);

// array and object

let flowers = [
    { name: "Daisy", color : "white" },
    { name: "Tulip", color : "pink or yellow or yellow" },
    { name: "Sunflower", color : "yellow" }
];

//flowers[0];
//flowers[0]["name"];
//flowers[0].color; = object (not array)

console.log(flowers[0]);
console.log(flowers[0]["name"]);
console.log(flowers[0].color);

//

let cat = { name: "Daisy", age: "3", color: "white", number: [3, 5] };
let dog = { name: "Max", age: "4", color: "brown", number: [5, 7, 9]  };
let rabbit = { name: "Otto", age: "1", color: "black", number: [3, 7, 9] };
let parrot = { name: "Bimbo", age: "2", color: "yellow", number: [2, 5, 7, 9] };

let pets = [cat, dog, rabbit, parrot];
//pets[0];
//pets[2].name;
//pets[2].number[1];

console.log(pets);
console.log(pets[0]);
console.log(pets[2].name);
console.log(pets[2].number[1]);

//

let cats = {};
cats["Tom"] = 4;
cats["Daisy"] = 2;
cats["Otto"] = 49;
cats["Max"] = 34;

console.log(cats);

cats["Tom"] += 6;


console.log(cats);

//movies with JD

let moviesWithJD = {
    "Pirates of the Caribbean" : {
        "The Curse of the Black Pearl.": {
            releaseDates: 2003,
            actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
            country: "United States",
            runningTime: "143 minutes"
            },
        "The Legend of Jack Sparrow": {
            releaseDates: 2006,
            actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
            country: "United States",
            runningTime: "143 minutes"
        },
        "Dead Man's Chest": {
            releaseDates: 2006,
            actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
            country: "United States",
            runningTime: "150 minutes"

        },
        "At World's End": {
            releaseDates: 2007,
            actors: ["Johnny Depp", "Orlando Bloom", "Keira Knightley"],
            country: "United States",
            runningTime: "169 minutes"
        },
    },
    "Charlie and the Chocolate Factory": {
        releaseDates: 2005,
        actors: ["Johnny Depp", "Freddie Highmore", "David Kelly"],
        country: ["United States", "United Kingdom", "Australia"],
        runningTime: "115 minutes"
    },
    "Alice in Wonderland": {
        releaseDates: 2010,
        actors: ["Johnny Depp", "Anne Hathaway", "Helena Bonham Carter"],
        country: "United States",
        runningTime: "108 minutes"
    },
}

let piratesOfTheCaribbean = moviesWithJD["Pirates of the Caribbean"]["At World's End"];
piratesOfTheCaribbean.actors;

console.log(moviesWithJD);
console.log(piratesOfTheCaribbean);
console.log(piratesOfTheCaribbean.actors);

let theTourist = {
    releaseDates: 2010,
    actors: ["Johnny Depp", "Angelina Jolie"],
    country: "United States",
    runningTime: "103 minutes"
};

moviesWithJD["The Tourist"] = theTourist;
console.log(moviesWithJD);

Object.keys(moviesWithJD);
console.log(Object.keys(moviesWithJD));

//taskOne

let game = {};
game["Antonina"] = 0;
game["Mykola"] = 0;

console.log(game);

game["Mykola"] += 10;
game["Antonina"] += 5;

console.log(game);

//taskTwo

let taskTwo = {
    "name": "A ridiculous object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "Banana Shark"
};

let answer = taskTwo["some array"][2];
//answer.number;


console.log(answer.number);


