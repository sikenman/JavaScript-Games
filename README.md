# JavaScript-Games
My small games developed in JavaScript
----
## Projects
- Memory4by4
    - Classic memory game of 4 × 4 size.
    - Use of various emojis for the pictures.
    - CSS animation while clicking on the card

### Example CSS code used in Memory4by4
```css
.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh / 5.3);
  transition: transform 1s ease;
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