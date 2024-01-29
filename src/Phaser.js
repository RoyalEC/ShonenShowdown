import React from "react";
import Phaser from "phaser";
import { useRef, useEffect } from "react";
import Matter from "matter-js";

function PhaserComponent() {
  class Example extends Phaser.Scene {
    preload() {
      this.load.image("sky", "assets/sky.png");
      this.load.image("ground", "assets/platform.png");
      this.load.image("star", "assets/star.png");
      this.load.image("bomb", "assets/bomb.png");
      this.load.spritesheet("dude", "assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48,
      });
    }

    create() {
      this.add.image(400, 300, "sky");

      const logo = this.physics.add.image(400, 100, "logo");
    }
  }

  const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 1000,
    scene: Example,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
      },
    },
  };

  const game = new Phaser.Game(config);
}

export default PhaserComponent;
