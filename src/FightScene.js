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
        this.load.image(
          "fireball_110",
          "Sprite-Folder/Characters/itachi/fireball_110.png"
        );
        this.load.image(
          "fireball_120",
          "Sprite-Folder/Characters/itachi/fireball_120.png"
        );
        this.load.image(
          "fireball_130",
          "Sprite-Folder/Characters/itachi/fireball_130.png"
        );
        this.load.image(
          "fireball_140",
          "Sprite-Folder/Characters/itachi/fireball_140.png"
        );
        this.load.image(
          "fireball_150",
          "Sprite-Folder/Characters/itachi/fireball_150.png"
        );
        this.load.image(
          "fireball_160",
          "Sprite-Folder/Characters/itachi/fireball_160.png"
        );
        this.load.on("complete", () => {
          const frames = this.anims.generateFrameNumbers("ult", {
            start: 1,
            end: 5,
            zeroPad: 1,
            prefix: "ult_",
            suffix: ".png",
          });
          const frames2 = this.anims.generateFrameNumbers("fireball", {
            start: 110,
            end: 160,
            zeroPad: 1,
            prefix: "fireball_",
            suffix: ".png",
          });
        });
      }

      ultimateAttack() {
        const fireball = this.physics.add.sprite(120, 450, "fireball_110");
        fireball.anims.play("fireball", true);
        fireball.setVelocityX(600);
        fireball.body.setAllowGravity(false);
      }

      create() {
        this.cameras.main.setBackgroundColor("#FFFFFF");
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
          repeat: 0,
        });

        const itachi = this.physics.add.sprite(100, 450, "ult_1");
        itachi.anims.play("ult", true);
        itachi.body.setAllowGravity(false);

        this.anims.create({
          key: "fireball",
          frames: [
            {
              key: "fireball_110",
            },
            { key: "fireball_120" },
            { key: "fireball_130" },
            { key: "fireball_140" },
            { key: "fireball_150" },
            { key: "fireball_160" },
          ],
          frameRate: 10,
          repeat: 0,
        });

        itachi.on("animationcomplete", () => {
          this.ultimateAttack();
        });
      }
      update() {}
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
