/* 
  This is the array shuffle module based on 
  [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)

  @Author: Siken Man Dongol
  @Date  : April 14-16, 2023
*/
function shuffleArray(array) {
  let size = array.length;
  let tmp, index;

  for (let pass = 1; pass <= 3; pass++) {
    // While there remain elements to shuffle…
    while (size) {
      index = Math.floor(Math.random() * size--);

      // swap with the current element.
      tmp = array[size];
      array[size] = array[index];
      array[index] = tmp;
    }
  }
  return array;
}

/*
  Returns random number between 0 and [max-1]
*/
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

export function getEmojis() {
  let selected = null;

  const emoji4x5a = ["🐶", "😎", "🐼", "🍁", "🤖", "👻", "🚀", "🦄", "🌍", "❤️"];
  const emoji4x5b = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"];
  const emoji4x5c = ["😀", "😥", "😍", "😎", "🤔", "🥶", "🤯", "🥺", "🤑", "😡"];

  switch (getRandom(3)) {
    case 0:
      selected = emoji4x5a;
      break;
    case 1:
      selected = emoji4x5b;
      break;
    case 2:
      selected = emoji4x5c;
      break;
    default:
      selected = emoji4x5a;
      break;
  }

  // making emoji pair
  const emojis = [...selected, ...selected];

  // shuffle the emoji array
  const pair = shuffleArray(emojis);
  return pair;
}
