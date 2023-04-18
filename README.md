# JavaScript-Games
My small games developed in JavaScript utilizing ECMAScript features
----
## Projects
- MemoryGame
    - Classic memory game of 4 × 5 size.
    - Use of various emojis for the pictures.
    - Selection of text is disabled (via CSS).
    - CSS animation while clicking on the card.
      - CSS animation toggle based on [showAnimation] boolean variable.
    - Context menu on right click disabled (via JavaScript).
    - Responsive grid design that adjusts to different screen sizes.
    - Game over modal dialog box is shown when user completes the game.
    - Implemented (Immediately Invoked Function Expressions).
    - Used Fisher–Yates shuffling algorithm.
      - [Fisher–Yates Shuffle](https://bost.ocks.org/mike/shuffle/)
    - Make use of export and import modules with two JS files.
    - Random set of emojis are selected at runtime.
    - Multi level of game 3 × 4, 4 × 4, 4 × 5, 5 × 5.
      - Making use of 2D array to load the games.

### Example CSS code used in MemoryGame
```css
.grid-card {
  background-color: #ddd;
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  cursor: pointer;
  font-size: 5.3rem;
  height: calc(100vh / var(--card-divisior));
  min-height: 8rem;
  min-width: 8rem;

  /* show emoji at the center */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.grid-card.matched {
  border: 2px solid var(--status-text-color1);
}
.grid-card.matched.show-animation {
  transform: rotateY(0deg);
}
```
### Sample JavaScript code used in MemoryGame
```javascript
export function getEmojis4x4() {
  const emoji44 = [
    ["🐶", "😎", "🐼", "🍁", "🤖", "👻", "🚀", "🌍"],
    ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"],
    ["😀", "😍", "😎", "🦊", "👍", "🤪", "👀", "🖐️"],
  ];

  const rndIndex = getRandom(3);
  // making emoji pair (8+8 = 16)
  const emojis = [...emoji44[rndIndex], ...emoji44[rndIndex]];

  const pair = shuffleArray(emojis);
  return pair;
}
```
