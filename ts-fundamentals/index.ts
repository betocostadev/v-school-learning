console.log('TS Intro')

// Implicit type
let myNumber = 42
// const books = ['The Witcher',  'American Gods']

// Explicity type
let myOtherNumber: number = 10

const books: string[] = ['The Witcher',  'American Gods']


// 
// Functions
// 
const sum = (x: number, y: number) : number => {
  return x + y
}

const destructuringSyntaxSum = ({x, y} : { x: number, y: number}) : number => x + y

// In the case below we use any because anything can be passed to the console
// We also use void as the return type, since the function does not return any value
const log = (value: any) : void => {
  console.log(value)
}

// ...
// Function with optional parameter
const greet = (name? : string) => {
  console.log(`Hello, ${name ?? 'Anonymous'}`)
}

console.log('The first try with a function')
console.log('Sum 10 + 20')
console.log(sum(10, 20))

// 
// UNION TYPES
// 
let booleanOrString : string | boolean = 'I Could change!'
booleanOrString = true
console.log(booleanOrString)

function printId(id: number | string) {
  console.log(id)
}

// 
// LITERAL TYPES
// 

let pi: 3.14 = 3.14 // cannot change as if it was a const

function setProductSize(size: 'small' | 'medium' | 'large') {
  return `You selected the size ${size}`
}

// setProductSize('huge') // Won't work

