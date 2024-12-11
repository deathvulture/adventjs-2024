function drawRace(indices: number[], length: number): string {
  let raceString = '';
  if (indices.length === 0) {
    return '';
  }

  for (let i = 0; i < indices.length; i++) {
    const spaceGap = indices.length - i - 1;
    raceString += ' '.repeat(spaceGap);
    if (indices[i] == 0) {
      raceString += '~'.repeat(length);
    } else {
      const reinPos = indices[i] > 0 ? indices[i] : length + indices[i];
      const trackBefore = '~'.repeat(reinPos);
      const trackAfter = '~'.repeat(length - reinPos - 1);
      raceString += trackBefore + 'r' + trackAfter
    }
    raceString += ` /${i + 1}`;
    if (i !== indices.length - 1) {
      raceString += '\n';
    }

  }
  return raceString
}


console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

// console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

// console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/