//https://adventjs.dev/es/challenges/2024/7

const invertString = (str: string): string => {
  str = str.replace('(', '').replace(')', '');
  return str.split('').reverse().join('');
}

function fixPackages(packages: string): string {
  const regex = /\([a-zA-Z]+\)/
  let matches = packages.match(regex)
  while (matches) {
    const index = packages.lastIndexOf(matches[0])
    const inverted = invertString(matches[0])
    const firstPart = packages.slice(0, index)
    const secondPart = packages.slice(index + matches[0].length)
    packages = firstPart + inverted + secondPart
    matches = packages.match(regex)
  }

  return packages
}




console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"