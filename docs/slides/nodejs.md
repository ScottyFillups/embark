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

## Using Node.js

```js
console.log('Hello world!')
```

```bash
$ node hello-world.js
Hello world!
```

---

## Finding packages on NPM

```bash
npm install @scottyfillups/hello-world --save
```


---


