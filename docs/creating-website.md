# Slide 1

```js
function foo () {
  let a = 5
  return {
    set: (b) => a = b,
    print: () => console.log(a)
  }
}

let c = foo()
c.print() // 5
c.set(10)
c.print() //10
```

---

# Slide 2

---

# Slide 3
