//1
let people = [
    { name: "Andrey", age: 10, budget: 20 },
    { name: "Ilya", age: 15, budget: 20000 },
    { name: "Sherik", age: 5, budget: 2000 },
    { name: "Ahmad", age: 20, budget: 200 },
]
let a = 0
for (const c of people) {
    a = c.budget + a
    
}
console.log(a);

//2
let min = 0
for (const element of people) {
    if (min === 0 || element.age < min.age) {
        min = element
    }
}
console.log(min.name);

//3
let max = 0
for (const element of people) {
    if (max === 0 || element.age > max.age) {
        max = element
    }
}
console.log(max.name);

//4
let b = people.reduce((a,b) =>{
    if (b.budget > 5000) {
        console.log(b.name);
    }
},0)

//5
for (const elm of people) {
    if (elm.budget > 1000) {
        console.log(elm.name);
    }
}

//6
let v = 0
for (const key in people) {
    if (people[key].age < 15) {
        v ++
    }
}
console.log(v);

//7
for (const key in people) {
    if (people[key].age >= 10) {
        console.log(`name ${people[key].name} age ${people[key].age}`);
        
    }
    
}