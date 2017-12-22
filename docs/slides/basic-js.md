class: inverse, middle, center

# Basic JavaScript


---

## A note on purpose, ES6, and style

This slideshow is very brief, and is meant to provide examples and explanations of the "essentials" (of course, that's subjective). 

I also omit some details which I believe will confuse beginners:
* `var` vs `let` vs `const`
* Syntactic sugar such as lambda functions: `(x) => x * 2`
* ES6+ stuff in general

In regard to style, I use the [Standard](https://standardjs.com/) style guide. The most "controversial" thing about this style guide is that it discourages the use of semi-colons, as JavaScript will [automatically insert them for you anyways](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi).

The only "gotcha" with Standard is you need to prepend a `';'` if you're starting a line with `'['` or `'('`:

```js
  var a = 5

  (function () { console.log(a) })()    // error!
  ;(function () { console.log(a) })()   // no error! :)
```

---

## End goal

By the end of this slideshow, you'll be able to understand what's happening here, and figure out the output:

```js
function printOddsInGroupsOfTen (init) {
  var counter = init || 0
  
  return {
    set: function (val) { counter = val },
    get: function () { return counter },
    print: function () {
      for (var i = 0; i < 20; i++) {
        if (counter % 2 === 0) { counter += 1 }
        console.log(counter)
        counter += 2
      }
    }
  }
}

var printer = printOddsInGroupsOfTen(11)

printer.set(50)
printer.print()
console.log(printer.get())

```

---

## Variable declaration and data types

To declare a variable, use the `var` keyword

JavaScript is _loosely typed_, which means you don't need specify a type during
variable declaration. A variable can also be reassigned to a different type:

```js
  var someVariable = 5
  
  someVariable = true
  someVariable = "this is text"

  console.log(someVariable)
```

Output:

```terminal
  $ node test.js
  this is text
```

---

## Variable declaration and data types

There are five primitive data types in JavaScript:
* Number
* Boolean
* String
* Undefined
* Null

```js
  var number = 3.14
  var boolean = true
  var string = "a string is a sequence of characters"

  var nullValue = null
  var notDefined = undefined
  var alsoNotDefined
```

If a variable is not initialized to anything, it defaults to
`undefined` until it's assigned to something. `null` is similar to 
`undefined`, but nobody uses it.

---

## Comments

You make single line comment with //

/* ... */ denotes a multi-line comment

```js
var a = 5   // This is a single line comment, anything past // isn't executed

/* This
   is
   a 
   multi-line
   comment */

/* 
 * Multi-line comments have fallen out of style, but you can 
 * make them look really fancy
 */

/*****************************************
 *                                       *
 *            LIKE THIS! :)              *
 *                                       *
 *****************************************/
```

---

## Operators

Arithmetic: +, -, *, /, %
* Follows the typical order of operations (BEDMAS)
* `+` also used for string concatenation, eg `'string' + 'abc' === 'stringabc'`
* % is the remainder operator
  * Returns the remainder of an integer division (no decimals)
  * Eg, consider 22 divided by 5: `22 === 5 * 4 + 2`
  * 5 is the divisor, 4 is the quotient, and 2 is the remainder

Assignment: =, +=, -=, *=, /=
* Assignment operators like `x += y` are just short form for `x = x + y`

```js
var a = 6

a /= 2            // a is 3
a = 8 + 2 * 10    // a is 28
a = 23 % 3        // a is 2 (23 === 3 * 7 + 2)
```
---
## Operators

Comparison: !==, ===, >, >=, <, <=
* Don't use `!=` and `==`, as they have unexpected behaviour
* `===` denotes equality, while `!==` denotes inequality

Logical: &&, ||, !
* Used on boolean expressions
* && denotes AND
* || denotes OR
* ! denotes NOT

```js
  var a = true || false     // a is true
  var b = true && false     // b is false
  var c = !true             // c is false
  var d = !false            // d is true
  var e = a !== b           // e is true
  var f = b === e           // f is false
```

---

## If-else Statement

```js
  var foo = 5

  if (foo === 5) {
    console.log('foo is five')
  }

  if (foo === 4) {
    console.log('foo is four')
  } else {
    console.log('foo is not four')
  }
```

Output:

```terminal
  $ node elif.js
  foo is five
  foo is not four
```

---

## For loop

```js
for (var i = 0; i < 3; i++) {
  console.log(i)
}
```

What's happening?
* The variable `i` is initialized to 0
* We determine if `i < 3` is true
  * If it is, we execute whatever is in between the {}s
  * In this case, the for loop body is just `console.log(i)`
* After we execute the body, we increment i by one
  * `i++` is just shorthand for `i += 1`, which is just shorthand for `i = i + 1`
* We keep going until `i < 3` is false; once it's false, we stop looping

Output: 

```terminal
  $ node for-loop.js
  0
  1
  2
```

---

## Functions

Functions can be declared with the `function` keyword. JavaScript is a functional language, and lets you do the following things:
* Nest functions inside other functions
* Treat functions as values
  * This means you can pass functions as arguments to other functions
  * You can also return functions

```js
function factorial (x) {
  function recur (y) {
    if (y === 0) return 1
    else return y * recur(y - 1)
  }
  console.log('Initial input was: ' + x.toString())
  return recur(x)
}
console.log(factorial(4))
```

Output:

```terminal
$ node factorial.js
Initial input was: 4
24
```
---

## Closures

When an outer function returns an inner function, the inner function still has access to the outer functions arguments and local variables.
* A closure is function that has access to the variables local to the scope it was created in

```js
function add (x) {
  function innerFn (y) {
    return y + x
  }
  return innerFn
}

var a = add(5)        // a stores innerFn, where x = 5
var b = a(4)          // b calls innerFn, passing y = 4, which returns y + x (9)

console.log(add(15)(5) + b)
```

Output:

```terminal
$ node addCurry.js
29
```

---

## Arrays

An array is an ordered list of data with the same type.
* A single item in an array is called an __element__
* The element's position in the array is its __index__
* Indices are __0 based__, meaning you start counting upwards from 0

There are many operations you can make on arrays, but there are three fundamental operations:
* array[i] - access the element at index i
* array.push(e) - appends an element, e, to the end of the array
* array.pop() - removes, or "pops" off the last element in the array

```js
var listOfPeople = ['Frank', 'Joe', 'Bob']

list.pop()
list.pop()
list.push('Philip')

// list is now ['Frank', 'Philip']
var person = list[1]      // person now stores 'Philip'
```

---

## Objects

Objects are a collection of key/value pairs. You supply a key, you get back a value. There are two ways to access values provided you have the key:
* Dot notation (more common)
* Bracket notation (usually only used with for..in loops; we'll discuss that next slide)

```js
var person = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: '54'
}

person.firstName = 'James'      // dot notation
person.['lastName'] = 'Bond'    // bracket notation

console.log('Hello, my name is ' + person.firstName + ' ' + person.lastName)
```

Output:

```terminal
$ node person.js
Hello, my name is James Bond
```

---

## For..in loop

For..in loops are used to traverse an object
* Note that `key` is a placeholder; you could use any arbitrary variable name for your loop variable
* key will be a string, so you cannot use dot notation
  * Eg `coffee.key` won't work, so you MUST use bracket notation.

```js
var coffee = { cost: 5.99, type: 'lattee', vendor: 'Starbucks' }

var keys = ''
var values = ''

for (key in coffee) {
   summary += key + ' '
   values += coffee[key] + ' '
}

console.log(keys)
console.log(values)
```

```terminal
$ node for-in.js
cost type vendor
5.99 lattee Starbucks
```

---

## Methods

As mentioned previously, objects are key/value data structures. You provide a key, you get a value. This stored value can be any type: it can be a number, an array, or even a function!

We can store "actions", or methods, in our objects:

```js
var dog = {
  name: 'Snoopy',
  age: 5,
  bark: function () {
    console.log('woof woof!')
  }
}

dog.bark()     // dog.bark returns a function, and then () invokes it
```

Output:
```terminal
$ node dog.js
woof woof!
```

---

## This

Todo ;)
