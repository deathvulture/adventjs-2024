// https://adventjs.dev/es/challenges/2024/11

function decodeFilename(filename: string): string {
  const regex = /_([a-zA-Z\d\-_]+\.[a-zA-Z]+)\./
  const match = filename.match(regex);
  const result = match ? match[1] : '';
  return result;
}


console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// ➞ "sleighDesign.png"

console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// ➞ "elf-roster.csv"


