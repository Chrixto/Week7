let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Ages:", ages)
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

ages.push(100)
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush)

let sumOfAges = 0;

for(let i = 0; i < ages.length; i++){
   // console.log(i, "Test")
    sumOfAges += (i)
    console.log("index:", i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);

let names = ["Sam", "Tommy", "Tin", "Sally", "Buck", "Bob"];
let totalChars = 0;

for (let i = 0; i < names.length; i++){
  //  console.log("test")
  totalChars += names[i].length
  console.log("index:", i, "name", names[i], "totalChars:", totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names", averageName);

let concatNames = "";
for (let i = 0; i < names.length; i++){
  //  console.log(i, "test");
  concatNames = concatNames.concat(names[i]) + " ";
  console.log(i, "Names concatenated", concatNames);
}

console.log("Last element of ages array:", ages[ages.length - 1])

console.log("First element of ages array:", ages[0]);

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
//  console.log(i, "test");
nameLengths.push(names[i].length)
console.log("Name lengths array:", nameLengths)
}

let charsTotal = 0;
for(let i = 0; i < nameLengths.length; i++) {
// console.log(i, "test");
charsTotal += nameLengths[i]
console.log("charsTotal:", charsTotal);
}

function concarWords(word, n) {
console.log("Word par:", word, "n Par:", n);
let concat = word.repeat(n)
console.log(concat)
}
concarWords("Hello", 3);

function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("Matthew", "Cox")

let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];

function sumNumbersArray(array) {
  let total = 0

  for (let i = 0; i < array.length; i++) {
    total += array[i]
    console.log("Total:", total);
  }

  if (total > 100) {
    console.log("Total:",total, true);
    return true;
  }
  else {
    console.log("Total:", total, false)
    return false
  }
}
sumNumbersArray(numbers2)

function calculateNumbersAverage(array){
  let total = 0;

  for(let i = 0; i < array.lengths; i++) {
  total += array[i];
console.log("calculate Function, total:", total);
}

let average = total / array.length;
console.log("Average of numbers:", average);
return average;
}

calculateNumbersAverage(numbers1);

let numbers3 = [100, 100, 100, 50];
let numbers4 = [100, 100, 101];

function twoAverages(array1, array2) {
  console.log("Parameters:", array1, array2, array1)
  let total1 = 0;
  let total2 = 0;
  for (const number of array1) {
    total1 += number;
    console.log("Curret number loop1:", number, "Total1:", total1);
  }
  for (const number of array2) {
    total2 += number;
    console.log("Curret number loop2:", number, "Total1:", total2);
  }
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;

  console.log("Averages", average1, average2);

  if(average1 > average2) {
    console.log(true);
    return true;
  }
  else if (average1 < average2) {
    console.log(false)
    return false;
  }
  else {
    console.log("Numbers are equal");
  
  }
}
twoAverages(numbers3, numbers4);

function willbuyDrink(isHotOutside, moneyinPocket) {
  console.log("Parmeters", isHotOutside, moneyinPocket) 
  let buyDrink = isHotOutside === true && moneyinPocket > 10.5;
  console.log("buy a drink?", buyDrink);
  return buyDrink;
}

willbuyDrink(true, 11)