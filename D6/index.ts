function inBox(box: string[]): boolean {
  const regex = /\#\s*\*\s*\#/;
  for (let i = 0; i < box.length; i++) {
    if (i === 0 || i === box.length - 1) {
      if (box[i].includes("*")) {
        return false;
      }
      continue;
    }
    if (box[i].match(regex)) {
      return true;
    }
  }
  return false;
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]))// ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false

console.log(inBox([
  "##*##",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false

console.log(inBox([
  "##*##",
  "#   #",
  "#   #",
  "#   #",
  "###*#"
])) // ➞ false

console.log(inBox([
  "##*##",
  "#   #",
  "#   #",
  "*   #",
  "#####"
])) // ➞ false