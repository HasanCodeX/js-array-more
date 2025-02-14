const person = ['john', 'jane', 'tom', 'jerry']
const sortedPerson = person.sort();
console.log(sortedPerson)

const numbers = [4,1,2,3,4,5,7,2];

const numbers_asc = numbers.sort((a, b) => a - b);
console.log(numbers_asc);

const numbers_dsc = numbers.sort((a, b) => b - a);
console.log(numbers_dsc);