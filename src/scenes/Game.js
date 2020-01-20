import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {
    this.load.image('logo', 'assets/phaser3-logo.png');
  }

  create(data) {
    this.add.image(400, 300, 'logo');
  }

  update(time, delta) {}
}

export default Game;