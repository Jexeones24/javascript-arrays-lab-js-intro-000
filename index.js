const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element) {
  kittens.push("Ralph")
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyPrependKitten(element) {
  kittens.unshift("Bob")
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

var kittens = ["Milo", "Otis", "Garfield"]

function appendKitten(name) {
  return [...kittens, "Broom"]
}

var kittens = ["Milo", "Otis", "Garfield"]

function prependKitten(name) {
  return ["Arnold", ...kittens]
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1)
}

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten() {
  return kittens.slice(1)
}
