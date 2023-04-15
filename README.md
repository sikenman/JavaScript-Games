# JavaScript-Games
My small games developed in JavaScript utilizing ECMAScript features
----
## Projects
- MemoryGame
    - Classic memory game of 5 × 4 size.
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

### Example CSS code used in Memory4by4
```css
.grid-item {
  background-color: #ddd;
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  cursor: pointer;
  font-size: 5rem;
  height: calc(100vh / 5.1);
  min-height: 8rem;
  transition: transform 0.8s ease;

  /* centering section */
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* centering section ends */
}

.grid-item.clicked {
  background-color: lightseagreen;
  transform: rotateY(180deg);
}

.grid-item.matched {
  border: 2px solid rgb(22, 150, 150);
  transform: rotateY(0deg);
}
```
### Sample JavaScript code used in Memory4by4
```javascript
  let count = 0;
  let gameScore = 0;

  const gridItems = document.querySelectorAll(".grid-item");

  const emoji4a = ["🐶", "😎", "🐼", "🤖", "👻", "🚀", "🦄", "🌍", "❤️", "🐢"];
  const emoji4b = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"];

  // Making emoji pair
  const emojis = [...emoji4b, ...emoji4b];

  // Shuffle the emoji array twice with Fisher–Yates Shuffle algo.
  const pair1 = shuffleArray(emojis);
  const pairs = shuffleArray(pair1);
  console.log(pairs);
  ```
