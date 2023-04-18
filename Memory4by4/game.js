import * as Game from "./const.js";
import { getRandom, shuffleArray } from "./lib.js";

/* 
  This library have functions that returns the array of emoji after shuffling

  @Author: Siken Man Dongol
  @Date  : April 16-17, 2023
*/

export function getEmojis(level) {
  switch (level) {
    case Game.LVL3_4:
      return getEmojis3x4();
    case Game.LVL4_4:
      return getEmojis4x4();
    case Game.LVL4_5:
      return getEmojis4x5();
    case Game.LVL5_5:
      return getEmojis5x5();
  }
}

function getEmojis3x4() {
  const emoji34 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸"],
    ["😀", "😍", "😎", "🦊", "👍", "🤪"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (6+6 = 12)
  const emojis = [...emoji34[rndIndex], ...emoji34[rndIndex]];

  // shuffle the emoji array
  const pair = shuffleArray(emojis);
  return pair;
}

function getEmojis4x4() {
  const emoji44 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🤖"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"],
    ["😀", "😍", "😎", "🦊", "👍", "🤪", "👀", "🖐️"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (8+8 = 16)
  const emojis = [...emoji44[rndIndex], ...emoji44[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

function getEmojis4x5() {
  const emoji45 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🤖", "🦊", "❤️"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"],
    ["😀", "😍", "😎", "🦊", "👍", "🤪", "👀", "🖐️", "😉", "🫤"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (10+10 = 20)
  const emojis = [...emoji45[rndIndex], ...emoji45[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}

function getEmojis5x5() {
  const emoji55 = [
    ["🐶", "😎", "🐼", "🌻", "🌍", "👻", "🚀", "🤖", "🦊", "❤️", "👽", "🍁"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹", "🇯🇵", "🇰🇪"],
    ["😀", "😍", "😎", "🦊", "👍", "🤪", "👀", "🖐️", "😉", "🫤", "🐯", "💀"],
  ];

  const emojiExtra = [
    ["👍", "🎲", "🎯"],
    ["🇵🇦", "🇹🇷", "🇦🇺"],
    ["🤩", "😥", "🥺"],
  ];

  const rndIndex = getRandom(3);
  const rndExtra = getRandom(3);
  // making emoji pair (12+12 = 24), ane one extra
  const emojis = [
    ...emoji55[rndIndex],
    emojiExtra[rndIndex][rndExtra],
    ...emoji55[rndIndex],
  ];

  const pair = shuffleArray(emojis);
  return pair;
}
