import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";
import Itachi from "./CharactersJS/Itachi.js";
import FightScene from "./FightScene.js";
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

function SelectYourFighter() {
  const gameRef = useRef(null);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    gameContainerRef.current = document.createElement("div");
    gameContainerRef.current.id = "game-container";
    document.body.appendChild(gameContainerRef.current);

    class SelectFighterScene extends Phaser.Scene {
      constructor() {
        super({ key: "SelectFighterScene" });
      }

      preload() {
        this.load.image("gojo", "Sprite-Folder/Characters/Gojo/mugshot.png");
        this.load.image("shoto", "Sprite-Folder/Characters/Shoto/mugshot.png");
        this.load.image(
          "itachi",
          "Sprite-Folder/Characters/Itachi/mugshot.png"
        );
      }

      create() {
        this.add.text(20, 20, "Select Your Fighter");

        const fighter1 = this.add.sprite(100, 100, "gojo").setInteractive();
        const fighter2 = this.add.sprite(200, 100, "shoto").setInteractive();
        const fighter3 = this.add.sprite(300, 100, "itachi").setInteractive();

        fighter1.on("pointerdown", () => this.selectFighter("gojo"));
        fighter2.on("pointerdown", () => this.selectFighter("shoto"));
        fighter3.on("pointerdown", () => this.selectFighter("itachi"));
      }

      selectFighter(fighter) {
        this.registry.set("fighter", fighter);
        this.scene.start("FightScene");
      }
    }

    const config = {
      type: Phaser.AUTO,
      width: 1200,
      height: 1200,
      scene: [SelectFighterScene],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
      if (gameContainerRef.current) {
        document.body.removeChild(gameContainerRef.current);
      }
    };
  }, []);

  return (
    <div id="game-container">
      <h1>Select Your Fighter</h1>
    </div>
  );
}

export default SelectYourFighter;
