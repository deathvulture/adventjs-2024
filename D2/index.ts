//https://adventjs.dev/es/challenges/2024/2
function createFrame(names: string[]): string {
  // Code here
  let maxLength = 0;
  names.forEach(name => {
    if (name.length > maxLength) {
      maxLength = name.length;
    }
  });

  const frame = '*'.repeat(maxLength + 4);
  const lines = names.map( name => `* ${name}${' '.repeat(maxLength-name.length)} *`);

  return `${frame}\n${lines.join('\n')}\n${frame}`;

}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']));

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']));

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******
