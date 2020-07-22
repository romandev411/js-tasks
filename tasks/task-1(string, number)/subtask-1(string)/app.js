let string = 'some test string';

console.log('↓-----1-----↓');

let firstLett = string[0];
let lastLett = string[string.length-1];
console.log(firstLett, lastLett);

console.log('↑-----1-----↑');

console.log('↓-----2-----↓');

console.log(firstLett.toUpperCase(), lastLett.toUpperCase());

console.log('↑-----2-----↑');

console.log('↓-----3-----↓');

console.log(string.indexOf('string'));

console.log('↑-----3-----↑');

console.log('↓-----4-----↓');

let indexSp = string.indexOf(' ') + 1;
console.log(string.indexOf(' ', indexSp));

console.log('↑-----4-----↑');

console.log('↓-----5-----↓');

console.log(string.substr(5, 4));

console.log('↑-----5-----↑');

console.log('↓-----6-----↓');

console.log(string.substring(5, 9));

console.log('↑-----6-----↑');

console.log('↓-----7-----↓');

let string2 = string.slice(0, string.length - 6);
console.log(string2);

console.log('↑-----7-----↑');

console.log('↓-----8-----↓');

let  a=20, b=16;
console.log(a+''+b);

console.log('↑-----8-----↑');
