import React, { useEffect, useRef, useLayoutEffect } from "react";
import Phaser from "phaser";

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

      preload() {
        this.load.image("ult_1", "Sprite-Folder/Characters/itachi/ult_1.png");
        this.load.image("ult_2", "Sprite-Folder/Characters/itachi/ult_2.png");
        this.load.image("ult_3", "Sprite-Folder/Characters/itachi/ult_3.png");
        this.load.image("ult_4", "Sprite-Folder/Characters/itachi/ult_4.png");
        this.load.image("ult_5", "Sprite-Folder/Characters/itachi/ult_5.png");
      }

      create() {
        this.cameras.main.setBackgroundColor("#FFFFFF");
        this.load.on("complete", () => {
          const frames = this.anims.generateFrameNumbers("ult", {
            start: 1,
            end: 5,
            zeroPad: 1,
            prefix: "ult_",
            suffix: ".png",
          });
          this.anims.create({
            key: "ult",
            frames: [
              { key: "ult_1" },
              { key: "ult_2" },
              { key: "ult_3" },
              { key: "ult_4" },
              { key: "ult_5" },
            ],
            frameRate: 10,
            repeat: -1,
          });
        });

        const itachi = this.physics.add.sprite(100, 450, "ult_1");
        itachi.anims.play("ult", true);
        itachi.body.setAllowGravity(false);
      }
    }

    gameRef.current = new Phaser.Game({
      type: Phaser.AUTO,
      width: 1200,
      height: 1000,
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

  return (
    <div className="game">
      <h1>Shonen Showdown</h1>
      <h2>Choose your fighter!</h2>
    </div>
  );
}

export default FightScene;
