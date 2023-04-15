import { shuffleArray } from "./lib.js";

let globalTimer = null;
let showAnimation = false;

(function () {
  console.log("Game begins!!");

  // disable right click
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  // show animation during card click
  if (showAnimation === true) {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
      item.classList.add("show-animation");
    });
  }
})();

(function () {
  /* 
  This is the memory game code to play 5 x 4 game
  @Author : Siken Man Dongol
  @Date   : April 11-15, 2023
  */

  let count = 0;
  let gameScore = 0;
  let gameMoves = 0;

  let [firstClick, secondClick] = [null, null];
  let [firstEmoji, secondEmoji] = [null, null];

  const gridItems = document.querySelectorAll(".grid-item");

  const emoji4a = ["🐶", "😎", "🐼", "🤖", "👻", "🚀", "🦄", "🌍", "❤️", "🐢"];
  const emoji4b = ["🇱🇰", "🇫🇷", "🇨🇳", "🇳🇵", "🇰🇷", "🇺🇸", "🇧🇷", "🇵🇰", "🇮🇳", "🇵🇹"];
  const emoji4c = ["😀", "😥", "😍", "😎", "🤔", "🥶", "🤯", "🥺", "🤑", "😡"];

  // making emoji pair
  const emojis = [...emoji4a, ...emoji4a];

  // shuffle the emoji array twice with Fisher–Yates algorithm
  const pair1 = shuffleArray(emojis);
  const pairs = shuffleArray(pair1);
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
          // stop the timer
          clearInterval(globalTimer);

          // show [You Won] modal dialog
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
    This JS block handles displaying timer on the screen in 0:00 (m:ss) format
    this timer is called after every 1 second.
    @Author : Siken Man Dongol
    @Date   : April 12, 2023
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
