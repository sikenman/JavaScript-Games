(function () {
  /* 
    This is the memory game code to play 4 x 4 game
    @Author: Siken Man Dongol
    @Date: April 11, 2023
    */

  let count = 0;
  let gameScore = 0;

  let [firstClick, secondClick] = [null, null];
  let [firstEmoji, secondEmoji] = [null, null];

  const gridItems = document.querySelectorAll(".grid-item");

  const emoji4_SetA = ["🐶", "😊", "🐼", "🤖", "👻", "🚀", "🦄", "🚩"];
  const emoji4_SetB = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"];

  // Making emoji pair
  //const emojis = [...emoji4_SetA, ...emoji4_SetA];
  const emojis = [...emoji4_SetB, ...emoji4_SetB];

  //Shuffle the emoji array
  const pairs = emojis.sort((a, b) => 0.5 - Math.random());
  console.log(pairs);

  gridItems.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    if (count === 0) {
      firstEmoji = pairs[this.dataset.id];
      e.target.textContent = firstEmoji;
      //----
      firstClick = this;
      firstClick.classList.add("clicked");
      count++;
    } else if (count === 1) {
      secondEmoji = pairs[this.dataset.id];
      e.target.textContent = secondEmoji;
      //----
      secondClick = this;
      secondClick.classList.add("clicked");

      if (firstEmoji === secondEmoji) {
        gameScore++;
        document.getElementById("score").innerHTML = gameScore;

        firstClick.classList.add("matched");
        secondClick.classList.add("matched");

        firstClick.removeEventListener("click", handleClick);
        secondClick.removeEventListener("click", handleClick);
        firstClick = null;
        secondClick = null;
        count = 0;
        
        // GAME OVER
        if (gameScore == emojis.length / 2) {
          window.alert("You won the Game!!");
        }
      } else {
        setTimeout(() => {
          firstClick.textContent = "";
          secondClick.textContent = "";

          firstClick.classList.remove("clicked");
          secondClick.classList.remove("clicked");
          firstClick = null;
          secondClick = null;
          count = 0;
        }, 700);
        count++;
      }
    }
  }
})();
