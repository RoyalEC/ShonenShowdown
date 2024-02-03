import React, { useEffect, useRef, useLayoutEffect } from "react";
import Phaser from "phaser";
import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";
import Itachi from "./CharactersJS/Itachi.js";
import PixelMap from "./PixelMap.js";

export class FightScene extends Phaser.Scene {
  constructor() {
    super({ key: "FightScene" });
    this.activeCharacter = null;
  }

  init(data) {
    this.selectedFighter = data.fighter;
  }

  preload() {
    PixelMap.preload(this);
    Gojo.preload(this);
    Shoto.preload(this);
    Itachi.preload(this);
  }
  create(data) {
    this.cameras.main.setBackgroundColor("#FFFFFF");
    this.PixelMap = new PixelMap(this);
    this.cursors = this.input.keyboard.createCursorKeys();

    switch (this.selectedFighter) {
      case "Gojo":
        this.activeCharacter = new Gojo(this, this.cursors);
        break;
      case "Shoto":
        this.activeCharacter = new Shoto(this, this.cursors);
        break;
      case "Itachi":
        this.activeCharacter = new Itachi(this, this.cursors);
        break;
      default:
        console.error("Unknown fighter selected");
        return;
    }

    // Assuming fighter class correctly initializes its sprite
    // Correct place to initialize cursors
    //   setupCharacterSprite(sprite) {
    //     sprite.setPosition(100, this.scale.height - sprite.displayHeight / 2);
    //     sprite.setScale(3);
    //     sprite.setCollideWorldBounds(true);
    //     // Additional setup as needed
    // }
  }

  update() {
    if (this.activeCharacter) {
      this.activeCharacter.update();
    }
    // if (this.currentFighter && this.cursors) {
    //   const { left, right, up, down } = this.cursors;
    //   const velocity = 200;

    //   // Reset velocity
    //   this.currentFighter.sprite.setVelocity(0);

    //   // Check for left/right input
    //   if (left.isDown) {
    //     this.currentFighter.sprite.setVelocityX(-velocity);
    //   } else if (right.isDown) {
    //     this.currentFighter.sprite.setVelocityX(velocity);
    //   }

    //   // Check for up/down input
    //   if (up.isDown) {
    //     this.currentFighter.sprite.setVelocityY(-velocity);
    //   } else if (down.isDown) {
    //     this.currentFighter.sprite.setVelocityY(velocity);
    //   }
    // }
  }
}

export function NewFightScene() {
  const gameRef = useRef(null);
  const gameContainerRef = useRef(null);

  useLayoutEffect(() => {
    gameContainerRef.current = document.createElement("div");
    gameContainerRef.current.style.backgroundColor = "";
    document.body.appendChild(gameContainerRef.current);

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      width: 1200,
      height: 600,
      backgroundColor: "white",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
      parent: gameContainerRef.current,
      scene: [FightScene],
    });

    return () => {
      gameRef.current.destroy(true);
      document.body.removeChild(gameContainerRef.current);
    };
  }, []); // Only one array of dependencies

  return <div className="game"></div>;
}
