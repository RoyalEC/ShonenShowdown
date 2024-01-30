import React, { useEffect, useRef, useLayoutEffect } from "react";
import Phaser from "phaser";
import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";

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
        Gojo.preload(this);
        Shoto.preload(this);
      }

      create() {
        this.cameras.main.setBackgroundColor("#FFFFFF");
        this.Gojo = new Gojo(this, "gojoStance_0");
        this.Gojo.sprite.setPosition(100, 100);
        this.Gojo.sprite.body.setAllowGravity(false);

        this.Shoto = new Shoto(this, "shotoStance_0");
        this.Shoto.sprite.setPosition(200, 200);
        this.Shoto.sprite.body.setAllowGravity(false);

        // Set world bounds
        this.physics.world.setBounds(
          0,
          0,
          this.sys.game.config.width,
          this.sys.game.config.height
        );
        this.Gojo.sprite.setCollideWorldBounds(true);
        this.Shoto.sprite.setCollideWorldBounds(true);
      }
      update() {
        this.Gojo.ultimateAttack();
        this.Gojo.update();
        this.Shoto.stance();
        this.Shoto.update();
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
