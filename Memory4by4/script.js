import {shuffleArray} from "./lib.js";

let globalTimer = null;

(function () {
  console.log("Game begins!!");
  // disable right click
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
})();

(function () {
  /* 
  This is the memory game code to play 4 x 4 game
  @Author : Siken Man Dongol
  @Date   : April 11-13, 2023
  */

  let count = 0;
  let gameScore = 0;
  let gameMoves = 0;

  let [firstClick, secondClick] = [null, null];
  let [firstEmoji, secondEmoji] = [null, null];

  const gridItems = document.querySelectorAll(".grid-item");
  
  const emoji4a = ["🐶", "😎", "🐼", "🤖", "👻", "🚀", "🦄", "🌍"];
  const emoji4b = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰"];
  const emoji4c = ["😀", "😂", "😍", "😎", "🤔", "🤫", "🤯", "🥺"];
  
  // Making emoji pair
  const emojis = [...emoji4b, ...emoji4b];
  
  // Shuffle the emoji array twice with Fisher–Yates Shuffle algo.
  const pair1 = shuffleArray(emojis);
  const pairs= shuffleArray(pair1);
  console.log(pairs);

  gridItems.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  function handleClick(e) {
    gameMoves++;
    // display games moves (2 clicks = 1 move)
    if (gameMoves % 2 == 0) {
      document.getElementById("moves").innerHTML = Number(gameMoves / 2);
    }

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
        document.getElementById("match").innerHTML = gameScore;

        firstClick.classList.add("matched");
        secondClick.classList.add("matched");

        firstClick.removeEventListener("click", handleClick);
        secondClick.removeEventListener("click", handleClick);
        firstClick = null;
        secondClick = null;
        count = 0;

        /* GAME OVER */
        if (gameScore == emojis.length / 2) {
          // display the Restart Game div block
          document.getElementById("restart-block").style.display = "block";
          document.getElementById("status-block").style.display = "none";

          // stop the timer
          clearInterval(globalTimer);

          // show You Won Dialog
          document.getElementById("popup-dlg").classList.add("showme");
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
        }, 800);
        count++;
      }
    }
  }
})();

// Timer block of the JavaScript
(function () {
  /* 
    This JS handles displaying timer on the screen in 0:00 (m:ss) format
    @Author: Siken Man Dongol
    @Date: April 12, 2023
*/
  let seconds = 0;
  let minutes = 0;

  globalTimer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    let mm = `${String(minutes).padStart(1, "0")}`;
    let ss = `${String(seconds).padStart(2, "0")}`;
    document.getElementById("timer").innerHTML = `${mm}:${ss}`;
  }, 1000);
})();
