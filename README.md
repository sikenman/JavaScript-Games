# JavaScript-Games
My small games developed in JavaScript
----
## Projects
- Memory4by4
    - Classic memory game of 4 × 4 size.
    - Use of various emojis for the pictures.
    - CSS animation while clicking on the card.
    - Selection of text is disabled (via CSS).
    - Context menu on right click disabled (via JavaScript).
    - Game over modal dialog box is shown when user completes the game.

### Example CSS code used in Memory4by4
```css
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh / 5.1);
  transition: transform 0.8s ease;
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

  let [firstClick, secondClick] = [null, null];
  let [firstEmoji, secondEmoji] = [null, null];

  const emoji4_SetA = ["🐶", "😎", "🐼", "🤖", "👻", "🚀", "🦄", "🌍"];
  const emoji4_SetB = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"];

  // Making emoji pair
  const emojis = [...emoji4_SetA, ...emoji4_SetA];
  ```
