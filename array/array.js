let animals = [
    "Cat",
    "Dog",
    "Rabbir",
    "Hamster",
    "Guinea pig",
    "Fish",
    "Parrot",
    "Tortoise",
    "Snake",
    "Donkey",
    "Pig",
    "Chicken",
    "Sheep",
    "Horse",
    "Cow"
];

animals[5];
console.log(animals[5]);

animals[5] = "It is an jellefich";
console.log(animals);
/*
Fish
*/
let fish = [];
fish[0] = "Octopus";
fish[1] = "Catfish";
fish[2] = "Cod";
fish[3] = "Dolphin";
fish[4] = "Eel";
fish[5] = "Herring"
fish[6] = "Mackerel";
fish[7] = "Salmon";
fish[22] = "Whale";

console.log(fish);
/*
Clams
*/
let clamsAndNamber = [5, "crab", "prawn", ["sea urchin", 8, "starfish"], "shrimp", 568 ];

console.log(clamsAndNamber[4]);
console.log(clamsAndNamber[3][1]);
/*
Wild animals + -
unshift and shift = the beginning of the array;
push and pop = end of array;
*/
let wildAnimals = ["Deer", "Reindeer", "Squirrel"];
//wildAnimals.length;  =  the length of the array;
//wildAnimals[wildAnimals.length -2]
wildAnimals.push("Rabbit");//+end
wildAnimals.unshift("Hedgehog");//+beginning
wildAnimals.unshift("Fox");//+beginning

console.log(wildAnimals.length);
console.log(wildAnimals[wildAnimals.length -2]);
console.log(wildAnimals);

let lastWildAnimals = wildAnimals.pop();
let firstWildAnimals = wildAnimals.shift();

console.log(wildAnimals);
console.log(lastWildAnimals);
console.log(firstWildAnimals);

wildAnimals.unshift(lastWildAnimals);

console.log(lastWildAnimals);
console.log(wildAnimals);

/*
Concatenate
*/
let tree = ["Hazel", "Pine", "Willow"]; 
let flowers = ["Daisy", "Tulip", "Sunflower"];
let berries = [ "Blueberry", "Blackcurrent", "Blackberry"];
let vegetables = ["Avocado", "Mushroom", "Broccoli"];
let plants = tree.concat(flowers);

console.log(plants);
console.log(flowers);

let all = plants.concat(berries, vegetables);

console.log(all);

//indexOf
flowers.indexOf("Daisy");
flowers[0];

console.log(flowers.indexOf("Daisy"));
console.log(flowers[0]);

/*
.join();
*/

let pets = ["Cat", "Dog", "Rabbir", "Parrot"];
pets.join();
pets.join( " and ");

console.log(pets);
console.log(pets.join());
console.log(pets.join( " and "));

/*
*/

let week = [];
week.push("Monday");
week.push("Tuesdsy");
week.push("Wednesdey");
week.push("Thursday");
week.push("Friday");
week.push("Saturday");
week.push("Sunday");

console.log(week);

week.pop();
week.pop();
week.pop();
week.pop();
week.pop();
week.pop();

console.log('week 2: ',week);

/*
Math.
*/

Math.random();
Math.random() * 5;

console.log(Math.random());
console.log(Math.random() * 5);


Math.floor(3.575784993);

console.log(Math.floor(3.575784993));


Math.floor(Math.random() * 55);

console.log(Math.floor(Math.random() * 55));


let randomWords = [
    "Cat",
    "Dog",
    "Rabbir",
    "Hamster",
    "Guinea pig",
    "Fish",
    "Parrot",
    "Tortoise",
    "Snake",
    "Donkey",
    "Pig",
    "Chicken",
    "Sheep",
    "Horse",
    "Cow"
];

randomWords[Math.floor(Math.random() * 15)];

console.log(randomWords[Math.floor(Math.random() * 15)]);

//let randomIndex =  Math.floor(Math.random() * 15);
//randomWords[randomIndex];

//console.log(randomWords[randomIndex]);

let phrases = [
    "I am good.",
    "Maybe not today?",
    "Hello!",
    "I am not sure that is a great idea.",
    "Good morning!",
    "Bye!"
]
// Hello)
phrases[Math.floor(Math.random() * 6)];

console.log(phrases[Math.floor(Math.random() * 6)]);

/*
*/
let randomColors = ["Yellow", "Orange", "Pink", "Purple"];
let randomFlowers = ["Daisy", "Tulip", "Sunflower", "Peony"];

let randomColor = randomColors[Math.floor(Math.random() * 4)];
let randomFlower = randomFlowers[Math.floor(Math.random() * 4)];

//let randomtogether = "It is a beautiful " + randomColor + " " + randomFlower + "!";
//let randomtogether = ["It is a beautiful", randomColor, randomFlower + "!"].join(" ");

let randomtogetherWithTemplateString = `It is a beautiful ${randomColor} ${randomFlower}!`// template string
 
console.log(randomtogetherWithTemplateString);
















