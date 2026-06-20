import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";
import Itachi from "./CharactersJS/Itachi.js";
import { NewFightScene } from "./FightScene.js";
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import { FightScene } from "./FightScene.js";
import Fighter from "./CharactersJS/Fighter.js";
import styles from "./SelectYourFighter.module.css";

class SelectFighterScene extends Phaser.Scene {
  init(data) {
    this.registry.set("gameRef", data.gameRef);
  }
  constructor() {
    super({ key: "SelectFighterScene" });
  }

  preload() {
    this.load.image("Gojo", "Sprite-Folder/Characters/Gojo/mugshot.png");
    this.load.image("Shoto", "Sprite-Folder/Characters/Shoto/mugshot.png");
    this.load.image("itachi", "Sprite-Folder/Characters/Itachi/mugshot.png");
    Gojo.preload(this);
    Shoto.preload(this);
    Itachi.preload(this);
    this.load.audio("bgm1", "Sprite-Folder/Music/gobeyond.mp3");
  }

  //   startFightScene(fighterKey) {
  //     // Start FightScene and pass the selected fighter's key
  //     this.scene.start("FightScene", { fighter: fighterKey });
  //   }

  //   selectFighter(fighter) {
  //     this.registry.set("fighter", { fighter: fighter });
  //     this.scene.start("FightScene");
  //   }

  create() {
    this.bgm1 = this.sound.add("bgm1", { loop: true });
    this.bgm1.play();
    this.add.text(20, 20, "Select Your Fighter");

    const gojoImage = this.add.image(100, 100, "Gojo").setInteractive();
    gojoImage.on("pointerdown", () => {
      this.scene.start("FightScene", { fighter: "Gojo" });
    });

    const shotoImage = this.add.image(250, 100, "Shoto").setInteractive();
    shotoImage.on("pointerdown", () => {
      this.scene.start("FightScene", { fighter: "Shoto" });
    });

    const itachiImage = this.add.image(350, 100, "itachi").setInteractive();
    itachiImage.on("pointerdown", () => {
      this.scene.start("FightScene", { fighter: "Itachi" });
    });
  }
}
// console.log(fighter);

function SelectYourFighter() {
  const gameRef = useRef(null);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 1500,
      height: 700,
      scene: [SelectFighterScene, FightScene],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
        },
      },
    };
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <>
      <div id="game-container" className={styles.gameContainer}>
        <h1 className={styles.title}>Select Your Fighter</h1>
        {/* Characters should be rendered by Phaser inside this container */}
      </div>
    </>
  );
}
export default SelectYourFighter;
