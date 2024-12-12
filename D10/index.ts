//https://adventjs.dev/es/challenges/2024/10

function compile(instructions: string[]): number {
  const registry = {}
  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i]
    const [command, arg1, arg2] = instruction.split(' ')
    if (command === 'MOV') {
      registry[arg2] = registry[arg1] || parseInt(arg1)
      continue
    }

    if (command === 'INC') {
      registry[arg1] = (registry[arg1] ?? 0) + 1
      continue
    }

    if (command === 'JMP' && (!registry[arg1] || registry[arg1] === 0)) {
      i = (registry[arg2] || parseInt(arg2)) - 1
      continue
    }

    if (command === 'DEC') {
      registry[arg1] = (registry[arg1] ?? 0) - 1
    }
  }
  return registry['A']
}



const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions))// -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */