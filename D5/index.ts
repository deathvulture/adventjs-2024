//https://adventjs.dev/es/challenges/2024/5

type Shoe = {
  type: 'I' | 'R'
  size: number
}

//create a type named OrphanShoes that has a number as key and I, R values with a number
type OrphanShoes = {
  [key: number]: {
    I: number
    R: number
  }
}

const orphanShoes = {}

function organizeShoes(shoes: Shoe[]): number[] {
  if (shoes.length === 0) {
    return []
  }

  const completedShoes: number[] = []
  for (const shoe of shoes) {
    if (!orphanShoes[shoe.size]) {
      orphanShoes[shoe.size] = {
        I: 0,
        R: 0
      }
    }
    orphanShoes[shoe.size][shoe.type]++;
    if (orphanShoes[shoe.size].I >= 1 && orphanShoes[shoe.size].R >= 1) {
      completedShoes.push(shoe.size);
      orphanShoes[shoe.size].I--;
      orphanShoes[shoe.size].R--;
    }
  }
  return completedShoes;
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
organizeShoes(shoes2)
// [38, 38]

const shoes3: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []