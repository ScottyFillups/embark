# Basic JavaScript


---

# A note on purpose, ES6, and style

This slideshow is very brief, and is meant to provide examples and explanations of the "essentials" (of course, that's subjective). 

I also omit some details which I believe will confuse beginners:
* `var` vs `let` vs `const`
* Syntactic sugar such as lambda functions: `(x) => x * 2`
* ES6+ stuff in general

In regard to style, I use the [Standard](https://standardjs.com/) style guide. The most "controversial" thing about this style guide is that it discourages the use of semi-colons, as JavaScript will [automatically insert them for you anyways](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi).



---

# End goal

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

```js
  var number = 3.14
  var boolean = true
  var string = "a string"

  var nullValue = null
  var notDefined = undefined
  var alsoNotDefined
```

If a variable is not initialized to anything, it defaults to
`undefined` until it's assigned to something

---

## If-else Statement

```js
  var a = 5

  if (a === 5) {
    console.log('a is five')
  }

  if (a === 4) {
    console.log('a is four')
  } else {
    console.log('a is not four')
  }
```

Output:

```terminal
  $ node ifelse.js
  a is five
  a is not four
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
