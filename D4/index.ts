//https://adventjs.dev/es/challenges/2024/4
function createXmasTree(height: number, ornament: string): string {
  let tree = ''
  const space = "_"
  const baseSpaces = space.repeat(height - 1)
  for (let i = 0; i < height; i++) {
    const spaces = space.repeat(height - i - 1)
    const ornaments = ornament.repeat(i * 2 + 1)
    tree += `${spaces}${ornaments}${spaces}\n`
  }
  tree += `${baseSpaces}#${baseSpaces}\n`
  tree += `${baseSpaces}#${baseSpaces}`
  return tree
}


const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/