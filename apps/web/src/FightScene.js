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
    this.load.audio("bgm", "Sprite-Folder/Music/cellsong.mp3");
  }
  create(data) {
    this.sound.stopByKey("bgm1");
    this.cameras.main.setBackgroundColor("#black");
    this.PixelMap = new PixelMap(this);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.bgm = this.sound.add("bgm", { loop: true });
    this.bgm.play();

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
  }

  update() {
    if (this.activeCharacter) {
      this.activeCharacter.update();
    }
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
      width: 1400,
      height: 700,
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
