class: inverse, middle, center

# Node.js and NPM

---

## What is Node.js and NPM?

* Node.js is a JavaScript runtime
  * In simple terms, you write a program in JavaScript, and Node.js executes your program
* NPM is a package manager for Node.js
  * NPM stands for Node.js Package Manager
  * NPM allows you to import modules written by other people

---

## Installing Node.js and NPM

1. Download Node.js [here](https://nodejs.org/en/) (select the recommended version)
2. Run the installer and just mash that `NEXT` button, and just use the defaults
3. Restart your PC
4. Open up Git bash enter the following commands:
  * `node -v`
  * `npm -v`


The `v` flag will cause `node` and `npm` to output the version number. If the installation went smoothly, you should see something like this: (numbers don't need to match)

```bash
$ node -v
v9.3.0
$ npm -v
5.6.0
```

---

## Using Node.js in interactive mode

Node.js comes with an interactive mode, where you can enter and evaluate JavaScript code one line at a time.

To start interactive mode, just enter `node` into the terminal:

```bash
$ node
> 40 + 40
80
> console.log('hello')
hello
>[2,3,4].map(x => x * 2)
[4, 6, 8]
```

To close interactive mode, press `CTRL+C` twice.

---

## Running JavaScript scripts with Node.js

Interactive mode is useful as a learning tool, but it isn't a practical for running large programs.

Thankfully, Node.js is able to run JavaScript files; simply run `node [FILE]`.

For example, suppose we have the following program saved as `hello-world.js`:

```js
// hello-world.js
console.log('Hello world!')
```

We can run the program by entering `node hello-world.js` in our terminal:

```bash
$ node hello-world.js
Hello world!
```

---

## Finding packages on NPM

NPM allows you to import and use code from other developers.

```bash
$ npm init -y
$ npm install @scottyfillups/hello-world --save
```

```js
// hello-world-npm.js
var helloWorld = require('@scottyfillups/hello-world')

helloWorld()
```

```bash
$ node hello-world-npm.js
hello, world
```

---


