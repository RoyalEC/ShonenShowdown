import react from "react";
import phaser from "phaser";

class Gojo {
  constructor(scene, sprite) {
    this.scene = scene;
    this.sprite = sprite;
  }
  static preload(scene) {
    scene.load.image();
  }

  stance() {}

  walk() {}

  jump() {}

  ultimateAttack() {}
}
