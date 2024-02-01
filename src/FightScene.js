import React, { useEffect, useRef, useLayoutEffect } from "react";
import Phaser from "phaser";
import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";
import Itachi from "./CharactersJS/Itachi.js";
import PixelMap from "./PixelMap.js";

function FightScene() {
  const gameRef = useRef(null);
  const gameContainerRef = useRef(null);

  useLayoutEffect(() => {
    gameContainerRef.current = document.createElement("div");
    gameContainerRef.current.style.backgroundColor = "";
    document.body.appendChild(gameContainerRef.current);

    class FightScene extends Phaser.Scene {
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

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      width: 1200,
      height: 1200,
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
  }, []);

  // return (
  //   // <div className="game">

  //   // </div>
  // );
}

export default FightScene;
