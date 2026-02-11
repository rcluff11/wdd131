let pets = ['goldfish', 'dog', 'rhino'];

pets[3] = 'bunny';

pets.push('lizard');

const steps = ['one', 'two', 'three', 'four', 'five'];

console.log(steps.length);

//forEach
// steps.forEach(function(item) {
//     console.log(item);
// })

steps.forEach(showSteps);

function showSteps(item) {
    console.log(item);
}  

let mylist = document.querySelector('#mylist');

const stepsHtml = steps.map(listTemplate);

function listTemplate(item) {
    return `<li>${item}</li>`;
}

mylist.innerHTML = stepsHtml.join('');

//.map

let grades = ["A", "B", "D"];

let points;

let gpaPoints = grades.map(convert);

function convert(grade){
    grade = grade.toUpperCase();
    switch(grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        case "C":
            points = 2;
            break;
        case "D":
            points = 1;
            break;
        case "F":
            points = 0;
            break;
    }
    return points;
}    

let totalPoints = gpaPoints.reduce(getTotal);

console.log(totalPoints);

function getTotal(total, num){
    return total + num;
}
console.log(gpaPoints);

let getAverage = totalPoints / gpaPoints.length;
console.log(getAverage);

//.filter

const words = ['hello', 'world', 'javascript', 'filter', 'watermelon', 'short'];

const shortWords = words.filter(function(word) {
    return word.length < 6;
})

console.log(shortWords);

const classes = [
    {name: 'WDD131', credits: 2},
    {name: 'CSE170', credits: 2},
    {name: 'ITM455', credits: 4}
]

let container = document.querySelector('#classes')

classes.forEach(function(item){
    let name = document.createElement('div');

    let html =`
    <span>${item.name}</span>
    <span>${item.credits}</span>
    <hr>`

    name.innerHTML = html;

    container.appendChild(name);
    
})