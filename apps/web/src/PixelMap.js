import React from "react";
import Phaser from "phaser";

class PixelMap {
  static preload(scene) {
    scene.load.image("Hills1", "PixelMap/PNG/Hills1.png");
    scene.load.image("Hills2", "PixelMap/PNG/Hills2.png");
    scene.load.image("Hills3", "PixelMap/PNG/Hills3.png");
    scene.load.image("Hills4", "PixelMap/PNG/Hills4.png");
    scene.load.image("Hills5", "PixelMap/PNG/Hills5.png");
    scene.load.image("Hills6", "PixelMap/PNG/Hills6.png");
  }

  constructor(scene) {
    this.scene = scene;
    this.parts = [];

    const part1 = this.scene.add.image(0, 0, "Hills1").setOrigin(0, 0);
    const part2 = this.scene.add.image(0, 0, "Hills2").setOrigin(0, 0);
    const part3 = this.scene.add.image(0, 0, "Hills3").setOrigin(0, 0);
    const part4 = this.scene.add.image(0, 0, "Hills4").setOrigin(0, 0);
    const part5 = this.scene.add.image(0, 0, "Hills5").setOrigin(0, 0);
    const part6 = this.scene.add.image(0, 0, "Hills6").setOrigin(0, 0);
    this.scene.scale.on("resize", this.resize, this);

    this.parts.push(part1);
    this.parts.push(part2);
    this.parts.push(part3);
    this.parts.push(part4);
    this.parts.push(part5);
    this.parts.push(part6);

    this.parts.forEach((part) => {
      part.setScale(
        this.scene.scale.width / part.width,
        this.scene.scale.height / part.height
      );
    });
  }

  resize(gameSize, baseSize, displaySize, resolution) {
    this.parts.forEach((part) => {
      part.setScale(
        this.scene.scale.width / part.width,
        this.scene.scale.height / part.height
      );
    });
  }

  update() {}
}

export default PixelMap;
