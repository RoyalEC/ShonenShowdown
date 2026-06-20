import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import Gojo from "./CharactersJS/Gojo";
import Shoto from "./CharactersJS/Shoto";
import Itachi from "./CharactersJS/Itachi";
import PixelMap from "./PixelMap";
import SelectYourFighter from "./SelectYourFighter.js";
import FightScene from "./FightScene.js";

function GameComponent() {
  const gameRef = useRef(null);

  class SelectFighterScene extends Phaser.Scene {
    init(data) {
      this.gameRef = data.gameRef;
    }
    constructor() {
      super({ key: "SelectFighterScene" });
    }

    preload() {
      this.load.image("gojo", "Sprite-Folder/Characters/Gojo/mugshot.png");
      this.load.image("shoto", "Sprite-Folder/Characters/Shoto/mugshot.png");
      this.load.image("itachi", "Sprite-Folder/Characters/Itachi/mugshot.png");
    }

    create() {
      this.add.text(20, 20, "Select Your Fighter");

      const gojoImage = this.add.image(100, 100, "gojo").setInteractive();
      this.add.existing(gojoImage);

      gojoImage.on("pointerdown", () => {
        this.selectFightScene("Gojo");
      });
      // fighter2.on("pointerdown", () => this.selectFighter("Shoto"));
      // fighter3.on("pointerdown", () => this.selectFighter("Itachi"));

      // Shoto.on("pointerdown", () => this.startFightScene("Shoto"));
      // Itachi.on("pointerdown", () => this.startFightScene("Itachi"));
    }

    startFightScene(fighter) {
      this.registry.set("fighter", { fighter });
      this.scene.start("FightScene");
    }
  }

  class FightScene extends Phaser.Scene {
    init(data) {
      this.gameRef = data.gameRef;
    }
    constructor() {
      super({ key: "FightScene" });
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

    create() {
      this.cameras.main.setBackgroundColor("#FFFFFF");

      this.pixelMap = new PixelMap(this);
      const selectedFighter = this.registry.get("fighter");
      this.Gojo = new Gojo(this, 100, 100);
      this.Gojo.sprite.setPosition(
        100,
        this.scale.height - this.Gojo.sprite.displayHeight / 2
      );
      this.Gojo.sprite.setScale(3);
      this.cursors = this.input.keyboard.createCursorKeys();
      this.add.existing(this.Gojo);
      this.Gojo.sprite.body.setAllowGravity(false);

      this.Shoto = new Shoto(this, "shotoStance_0");
      this.Shoto.sprite.setPosition(
        100,
        this.scale.height - this.Shoto.sprite.displayHeight / 2
      );
      this.add.existing(this.Shoto);
      this.Shoto.sprite.setScale(4);
      this.Shoto.sprite.body.setAllowGravity(false);

      this.Itachi = new Itachi(this, "ult_1");
      this.Itachi.sprite.setPosition(300, 300);
      this.Itachi.sprite.setScale(3);
      this.Itachi.sprite.body.setAllowGravity(false);

      // Set world bounds
      this.physics.world.setBounds(
        0,
        0,
        this.sys.game.config.width,
        this.sys.game.config.height
      );
      this.Gojo.sprite.setCollideWorldBounds(true);
      this.Shoto.sprite.setCollideWorldBounds(true);
      this.Itachi.sprite.setCollideWorldBounds(true);
    }
    update(cursors) {
      if (this.Gojo) {
        this.Gojo.update(this.cursors);
      }
      if (this.Shoto) {
        this.Shoto.update(this.cursors);
      }

      // this.Shoto.stance();
      // this.Shoto.update();
      // this.Itachi.ultimateAttack();
      // this.Itachi.update();
    }
  }

  useEffect(() => {
    if (gameRef.current) {
      return;
    }
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "game-container",
      scene: [
        { key: "SelectFighterScene", scene: SelectFighterScene, gameRef },
        { key: "FightScene", scene: FightScene, gameRef },
      ],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
    };
    gameRef.current = new Phaser.Game(config);
    return () => {
      gameRef.current.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
}

export default GameComponent;
