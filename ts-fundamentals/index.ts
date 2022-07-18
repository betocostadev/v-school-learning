console.log('TS Intro')

// Implicit type
let myNumber = 42
// const books = ['The Witcher',  'American Gods']

// Explicity type
let myOtherNumber: number = 10

const books: string[] = ['The Witcher',  'American Gods']


// Functions
const sum = (x: number, y: number) : number => {
  return x + y
}

console.log('The first try with a function')
console.log('Sum 10 + 20')
console.log(sum(10, 20))

