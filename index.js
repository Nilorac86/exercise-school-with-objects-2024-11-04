// const car = {
//     make: "Volvo",
//     model: "V70",
//     year: 2016,
//     manualTransmission: true,
//     start: function(){
//         console.log("The car has started");
//     },
// };


// for (const key in car){

//     const value = car[key];
//     console.log(`${key}: ${value}`);

// }

// // const person = {
//     // firstName: "Niklas",
//     // lastName: "Fähnrich",
//     // fullName: function (){
//         // const fullName = this.firstName + " " + this.lastName;
//         // console.log(fullName);
//     // },
// // };

// //person.fullName();


// const person = {

//     name: "Niklas",
//     age: 40,
// };

// const personDetaildInfo = {
//     lastName: "Fähnrich",
//     occupation: "developer",
// };

// console.log(person);
// console.log (personDetaildInfo);

// const updateObject = Object.assign (person, personDetaildInfo);

// console.log(updateObject);

// const house = {
//     color: "green",
//     area: 200,
//     adress: " Drottninggatan",
//     city: "Stockholm",

// };

// const keys = Object.keys(house);
// console.log(keys);

// const values = Object.values(house);
// console.log(house);

// const entries = Object.entries(house);
// console.log(entries);

// const frozenhouse = Object.freeze(house);
// frozenhouse.color = "blue";
// frozenhouse.windows = 5;

// console.log (frozenhouse);

// const isFrozen = Object.isFrozen (frozenhouse);


// // console.log (isFrozen);


// // const newCar = {};

// // console.log(car);
// // console.log(newCar);

// // const anotherCar = {...car};

// // console.log(anotherCar);

// // anotherCar.transmission = "manual";



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ];

// const numbersDoubledNot5 = numbers.map( (number) => {

//     if (number === 5 ){
        
//         return number;
//     }
    
//     return number * 2;
// });

// console.log(numbers);
// console.log(numbersDoubledNot5);

// const volvo = {
//     make: "Volvo",
//     model: "V90",
//     color: "green",

// };

// const saab = {
//     make: "saab",
//     model: "p3",
//     color: "blue",

// };
// const vw = {
//     make: "volkswagen",
//     model: "sharan",
//     color: "red",

// };


// const cars = [volvo, saab, vw];

// const carsAllRed = cars.map ((car) =>{

//     if (car.color === "red") {
//         return car;
//     }

//     return {...car, color: "red"};
// });

// console.log(cars);
// console.log(carsAllRed);

// const numbers =[1,1,0,0,0,1,1,1,1,1,1,0];

// const allOnes = numbers.filter ((number) => number !== 0);

// console.log(allOnes);


class Animal {

    #name;
    #species;

    constructor (name, spicies) {
        this.#name = name;
        this.#species = species;
    }

    getName(){
        return this.#name;
     
     }

     speak (){
        console.log(`The animal, ${this.#name} makes a sound`);
     }
}
const myDog = new Animal ("Fido", "Labrador");

console.log (myDog.getName());

// const myDog = new Animal ("Fido", "Labrador");
// const myOtherDog = new Animal ("Hugo", "Schäfer");
// const myCat = new Animal ("Mozart", "Russian Blue");
// 
// console.log (myDog.spicies);
// console.log (myOtherDog.name);
// console.log (myCat.name);