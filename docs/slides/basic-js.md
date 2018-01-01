class: inverse, middle, center

# Basic JavaScript


---

## A note on purpose, ES6, and style

This slideshow is (somewhat) brief, and is meant to provide examples and explanations of the "essentials" (of course, that's subjective). 

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
function printOddsInGroupsOfX (init) {
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

To declare a variable, use the `var` keyword.

Variables must:
* begin with a letter or underscore, and can only contain letters, numbers, and underscores
* not be a keyword, ie. a word that's part of the JavaScript language, like `var` or `function`

JavaScript is _loosely typed_, which means you don't need to specify a type during
variable declaration. A variable can also be reassigned to a different type:

```js
var someVariable = 5

someVariable = true
someVariable = "this is text"

console.log(someVariable)
```

Output:

```bash
$ node vars.js
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

If a variable is not initialized to anything, it defaults to `undefined` until it's assigned to something.
`null` is used to denote a variable that shouldn't be storing a valid value; `null` is rarely used in practice

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
 * Multi-line comments have fallen out of style (and aren't recommended),
 * but you can make them look really fancy
 */

/*****************************************
 *                                       *
 *            LIKE THIS! :)              *
 *                                       *
 *****************************************/
```

---

## Operators

Arithmetic: `+`, `-`, `*`, `/`, `%`
* Follows the typical order of operations (BEDMAS)
* `+` also used for string concatenation, eg `'string' + 'abc' === 'stringabc'`
* `%` is the remainder operator
  * Returns the remainder of an integer division (no decimals)
  * Eg, consider 22 divided by 5: `22 === 5 * 4 + 2`
  * 5 is the divisor, 4 is the quotient, and 2 is the remainder

Assignment: `=`, `+=`, `-=`, `*=`, `/=`
* Assignment operators like `x += y` are just short form for `x = x + y`

```js
var a = 6

a /= 2            // a is 3
a = 8 + 2 * 10    // a is 28
a = 23 % 3        // a is 2 (23 === 3 * 7 + 2)
```
---
## Operators

Comparison: `!==`, `===`, `>`, `>=`, `<`, `<=`
* Don't use `!=` and `==`, as they have unexpected behaviour
* `===` denotes equality, while `!==` denotes inequality

Logical: `&&`, `||`, `!`
* Used on boolean expressions
* `&&` denotes AND
* `||` denotes OR
* `!` denotes NOT

```js
var a = true || false     // a is true
var b = true && false     // b is false
var c = !true             // c is false
var d = !false            // d is true
var e = a !== b           // e is true
var f = b === e           // f is false
```

---

## Casting

When a variable's type doesn't match the required types of some operation, JavaScript will try to cast (convert) the variable's type so that it's valid. A few examples:

```js
var a = "hello " + 123

if (9000) {
  console.log(a)
} else {
  console.log("9000 wasn't casted to true")
}
```

Output:

```bash
$ node cast.js
hello 123
```

In this example, `123` was casted into a `string`, and then concatenated with `"hello "` to produce `"hello 123"`. Non-zero numbers are casted to `true` (eg `9000`, `-1`), while `0` is casted to `false`.

`a == b` returns `true` if `a` is similar to `b`; ie. in the event of a type mismatch, `a` would be casted to `b`.

---

## If-else statement

`if-else` statements are rather straightforward; I believe the best way to learn is reading the following example:

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

```bash
$ node elif.js
foo is five
foo is not four
```

---

## If-else statement

If-else statements can also be nested:

```js
var isSunny = true

if (!isSunny) {
  console.log( 

```js
var mark = 88

if (mark > 80) {
  console.log('A')
} else if (mark > 70) {
  console.log('B')
} else if (mark > 60) {
  console.log('C')
} else if (mark > 50) {
  console.log('D')
} else {
  console.log('F')
}
```

Output: 

```bash
$ node chain.js
A
```

---

## Switch statement

When creating large 


---

## The ternary operator

The ternary operator is similar to an If-else statement, but it evaluates to an expression.
* It takes the form of `condition ? valueIfTrue : valueIfFalse`.
* Often saves space

```js
// When used correctly, the ternary operator makes your code more terse
function max1 (a, b) {
  return a > b ? a : b
}

function max2 (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
```

If the ternary statement is long, it may be better to spread it out over several lines, like this:

```js
var c = 900 / 2 + 4 === 23 * 100 - 1
        ? 'a huuuuuuuuuuuuuuge message'
        : 'another very huuuuuuuuuuuuuuuuge message'
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

```bash
  $ node forloop.js
  0
  1
  2
```

---

## While loop

```js
var a = 2

while (a < 20) {
  console.log(a)
  a *= 2
}
```

A while loop is a little more intuitive than a for loop: the loop body will continue executing until the condition evaluates to false. Here's a run-through of the program execution:

* `a = 2`, so `a < 20` is true, therefore we execute the while loop body
* `a *= 2`, so now `a = 4`. `a < 20` is true again, so we execute the loop body again...
* Eventually, `a = 32`, so `a < 20` is false, therefore we do NOT execute the loop body and exit the loop

Output:

```bash
  $ node whileloop.js
  2
  4
  8
  16
```

---

## Do-while loop

A do-while loop is essentially a while loop, but with one difference: it's guaranteed to execute the loop body _at least once_.
* With a while loop, the condition is checked first, then the loop body is executed
* With a do-while loop, the loop body is executed, then the condition is checked to determine whether to continue looping

```js
var a = 2

do {
  console.log(a)
  a *= 2
} while (a < 1)
```

Output:

```bash
$ node dowhile.js
2
```

---

## Break

Sometimes you may want to _break_ out of a loop prematurely: 

```js
var a = 5

while (a > 0) {
  console.log(a)
  a += 1
  if (a === 8) {
    break;
  }
}
```

In this example, we see that the condition in the while loop, `a > 0`, will always be true, since a is initialized to 5 and increments by 1 each iteration. 

However, once `a === 8` is true, the program will `break` out of the loop.

Output:

```bash
$ node break.js
5
6
7
```

---

## Continue

Sometimes you may want to skip the rest of the loop body and _continue_ to the next loop iteration.

In the example below, if `i % 2 === 0` (if `i` is even), then the loop skips the rest of the body (in this case, it skips over `console.log(i)`).

As a result, the following program prints out only odd numbers:

```js
for (var i = 0; i < 6; i++) {
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}
```

Output:

```bash
$ node continue.js
1
3
5
```

---

## Functions

Functions can be declared with the `function` keyword. JavaScript is a functional language, and lets you do the following things:
* Nest functions inside other functions
* Treat functions as values
  * This means you can return functions from functions, and pass them as arguments

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

```bash
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

```bash
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
* `array[i]` - access the element at index `i`
* `array.push(e)` - appends an element, `e`, to the end of the array
* `array.pop()` - removes, or "pops" off the last element in the array

```js
var listOfPeople = ['Frank', 'Joe', 'Bob']

listOfPeople.pop()
listOfPeople.pop()
listOfPeople.push('Philip')

// listOfPeople is now ['Frank', 'Philip']
var person = listOfPeople[1]      // person now stores 'Philip'
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

```bash
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
var coffee = { cost: 5.99, coffee-type: 'lattee', vendor: 'Starbucks' }

var keys = ''
var values = ''

for (key in coffee) {
   summary += key + ' '
   values += coffee[key] + ' '
}

console.log(keys)
console.log(values)
```

```bash
$ node forin.js
cost coffee-type vendor
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
```bash
$ node dog.js
woof woof!
```

---

## this

Sometimes you may want your method to access or manipulate its object's data. The `this` keyword refers to the method's object:

```js
var dragon = {
  name: 'Spyro',
  color: 'Purple',
  critChance: 0.6,
  damage: 5,
  attack: function () {
    var damageDone = Math.random() < this.critChance  // Math is a built in JavaScript object with several methods
      ? this.damage * 2                               // Math.random() generates a random number between 0 and 1
      : this.damage                                   // If Math.random() is less than the critical strike chance
                                                      // Spyro will crit, and do double damage
    console.log(this.name + ' does ' + damageDone + ' points of damage!')
    return damageDone
  }
}

// This will either print 'Spyro does 5 points of damage!'
// or 'Spyro does 10 points of damage!' depending on the value of Math.random()

dragon.attack()
```
---

## Summary



---
