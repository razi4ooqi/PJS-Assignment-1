//  array method tasks:

//  1. pop

// var fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Peach", "Strawberry", "Watermelon"];

// var removeFruit = fruits.pop();

// console.log(fruits);


//  2. push

// var num = [11, 22, 15, 30, 24, 48,];

// var addNum = num.push(18);

// console.log(num);


//  3. shift

// var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Black", "Pink"];

// var removeColor = colors.shift();

// console.log(colors);


// 4. unshift

// var progLang = ["Python", "JavaScript", "Java", "C#", "C++", "C", "TypeScript"];

// var addLang = progLang.unshift("PHP");

// console.log(progLang);


// 5. slice

// var week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// var weekDays = week.slice(0, 5);

// console.log(weekDays);


// 6. reverse

// var wordArray = ['D', 'E', 'S', 'S', 'E', 'R', 'T', 'S'];

// var reversedArray = wordArray.reverse();

// var reversedWord = reversedArray.join('');

// console.log(reversedWord);


//  7.  concat

// var fruits = ["Apple", "Banana", "Grapes", "Mango", "Orange"];

// var vegetables = ["Carrot", "Broccoli", "Spinach", "Potato", "Cucumber", "Cauliflower", "Eggplant"];

// var mergedArray = fruits.concat(vegetables);

// console.log(mergedArray);


//  8. join

// var wordsArray = ['Coding', 'is', 'an', 'exciting', 'and', 'creative', 'skill.'];

// var sentence = wordsArray.join(' ');

// console.log(sentence);


//  9. Splice

// var num = [12, 25, 17, 12, 28, 35, 22, 13, 45, 27, 32, 21, 52];

// var removeNum = num.splice(3, 5);

// console.log(num);


//  10. map

// var numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// var numbersDouble = numbers.map(number => number * 2);

// console.log(numbersDouble);


//  11.  filter

// var ages = [15, 22, 28, 12, 18, 34, 28, 19, 21, 26, 17, 24, 36, 23];

// var filterAges = ages.filter(age => age > 21);

// console.log(filterAges);


//  12.  find

// var books = [
//     { title: 'The Catcher in the Rye', pages: 224 },
//     { title: 'To Kill a Mockingbird', pages: 281 },
//     { title: '1984', pages: 328 },
//     { title: 'The Great Gatsby', pages: 180 }         
// ];

// var booksMorePages = books.find(books => books.pages > 300);

// console.log('Book title: ', booksMorePages.title);
// console.log('Page count: ', booksMorePages.pages);


//  13.  every

// var examScores = [75, 82, 95, 68, 89];

// var scoresGreaterThan = examScores.every(score => score > 60);

// if (scoresGreaterThan) {
//     console.log('All scores are greater than 60.');
// } else {
//     console.log('Not all scores are greater than 60.');
// }


//  14.  some

// var temperatures = [25, 28, 32, 29, 27];

// var tempAbove = temperatures.some(temperature => temperature > 30);

// if (tempAbove) {
//     console.log('At least one temperature is above 30 degrees.');
// } else {
//     console.log('No temperature is above 30 degrees.');
// }


//  15.  forEach

// var names = ['Aqib', 'Sameer', 'Fawad', 'Salik', 'Aliyan'];

// names.forEach(name => {
//     console.log(`Hello, ${name}!`);
// });


//  16.  includes

// const cities = ["London", "New York", "Tokyo", "Sydney", "Paris", "Berlin", "Madrid", "Toronto", "Karachi"];

// const cityCheck = cities.includes("Tokyo");

// console.log(cityCheck);


//  17.  reduce

// const numbers = [66, 39, 22, 17, 35, 48, 13];

// const sum = numbers.reduce((total, num) => total + num , 0);

// console.log(sum);


//  18.  indexOf


// const colors = ['Red', 'Green', 'Blue', 'Gray', 'Yellow', 'Pink', 'Purple', 'Brown'];

// const indexColor = colors.indexOf('Blue');

// console.log(indexColor);


//  19   lastIndexOf

// const colors = ['Red', 'Green', 'Blue', 'Gray', 'Yellow', 'Pink', 'Purple', 'Brown'];

// const lastIndexColor = colors.lastIndexOf('Brown');

// console.log(lastIndexColor);


//  20.  toString

// const data = [42, 'apple', true, 3.14, false, 'Gilgit'];

// const dataString = data.toString();

// console.log(dataString);

// console.log(typeof(dataString));










