import logo from './logo.svg';
import './App.css';

function App() {
  let timeDisplay = document.querySelector("#timeDisplay");
  let startButton = document.querySelector("#startButton");
  let pauseButton = document.querySelector("#pauseButton");
  let resetButton = document.querySelector("#resetButton");

  let startTime = 0;
  let elapsedTime = 0;
  let currentTime = 0;
  let paused = true;
  let intervalId;
  let hrs = 0;
  let mins = 0;
  let secs = 0;
  let msecs = 0;


  startButton.addEventListener("click", () => {
      if (paused) {
          paused = false;
          startTime = Date.now() - elapsedTime;
          intervalId = setInterval(updateTime, 10)
      }
  });
  pauseButton.addEventListener("click", () => {
      if (!paused) {
          paused = true;
          elapsedTime = Date.now() - startTime;
          clearInterval(intervalId)
      }
  });
  resetButton.addEventListener("click", () => {
      clearInterval(intervalId)
       startTime = 0;
       elapsedTime = 0;
       currentTime = 0;
       paused = true;
       hrs = 0;
       mins = 0;
       secs = 0;
       msecs = 0;
      timeDisplay.textContent = "00:00:00:00"
  });


  function updateTime() {
      elapsedTime = Date.now() - startTime;
      msecs = Math.floor((elapsedTime / (1000 / 60)) % 60 )
      secs = Math.floor((elapsedTime / 1000) % 60);
      mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
      hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

      msecs = pad(msecs);
      secs = pad(secs);
      mins = pad(mins);
      hrs = pad(hrs);

      function pad(num) {
          return (("0") + num).length > 2 ? num : "0" + num;
      }


      timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msecs}`

  }
  return (
    <div className="App">
       <div id="timeContainer">
        <div id="timeDisplay">00:00:00:00</div>
        <div id="startButton">Start</div>
        <div id="pauseButton">Pause</div>
        <div id="resetButton">Reset</div>
    </div>
    </div>
  );
}

export default App;
