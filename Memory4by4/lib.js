/* 
  This is the array shuffle module based on 
  [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

  @Author : Siken Man Dongol
  @Date   : April 14, 2023
  */

export function shuffleArray(array) {
  let m = array.length;
  let tmp, i;
  i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    tmp = array[m];
    array[m] = array[i];
    array[i] = tmp;
  }

  return array;
}
