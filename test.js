// maps returns a new array
// It doesnot change the size of the original array unlike filter
//  It uses value from the original array when creating a new one

const people = [
    {
        name: 'sammy',
        age: 24,
        position: 'Developer'
    },
    {
        name: 'Debo',
        age: 24,
        position: 'Marketer'
    },
    {
        name: 'Anna',
        age: 25,
        position: 'Politician'
    },
    {
        name: 'Debbie',
        age: 25,
        position: 'Sales'
    },
    {
        name: 'Rachel',
        age: 29,
        position: 'Sales'
    },
];


// Map
/**const ages = people.map((person)=>{
    return{
        firstname: person.name.toLocaleUpperCase(),
        NewAge: person.age + 20
    }
})
console.log(ages);

const names = people.map((person)=> `<h2>${person.name}</h2>`);
const myname = document.querySelector('#result');
myname.innerHTML = names.join('');**/

// Unique values
// 1. Using the new Set to select unique values from the array and it returns an object
// 2. Using a spread operator to convert the object back to an array

/**const ages = [... new Set(people.map((item)=>{return item.age}))];

const result = document.querySelector('#result');

result.innerHTML = ages.map((myitem)=>{
    return `<button>${myitem}</button>`;
}).join('');**/

// Reduce
// returns a single value- number, object, array
const age = people.reduce(({}, person)=>{
    return {
        person
    }
},5);

console.log(age);    

const age2 = people.filter((person)=>{
    return person.age > 24;
});

console.log(age2);