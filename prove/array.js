let pets = ['goldfish', 'dog', 'rhino'];

pets[3] = 'bunny';

pets.push('lizard');

const steps = ['one', 'two', 'three', 'four', 'five'];

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

function getTotal(total, num){
    return total + num;
}

let getAverage = totalPoints / gpaPoints.length;

//.filter

const words = ['hello', 'world', 'javascript', 'filter', 'watermelon', 'short'];

const shortWords = words.filter(function(word) {
    return word.length < 6;
})