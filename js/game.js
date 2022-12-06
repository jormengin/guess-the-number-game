class Game {
  constructor() {
    this.userAttempts = 0;
    this.currentTime = 0;
    this.intervalID = null;
    this.score = 0; 
  }

  _timer() {
    this.intervalID = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }
  _getScore() {
    this.score = this.currentTime * this.userAttempts * 2;
  }
}