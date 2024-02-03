import Gojo from "./CharactersJS/Gojo.js";
import Shoto from "./CharactersJS/Shoto.js";
import Itachi from "./CharactersJS/Itachi.js";
import { NewFightScene } from "./FightScene.js";
import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import { FightScene } from "./FightScene.js";
import Fighter from "./CharactersJS/Fighter.js";

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
  }

  //   startFightScene(fighter) {
  //     this.registry.set("Gojo", fighter);
  //     this.scene.start("FightScene");
  //   }

  startFightScene(fighterKey) {
    // Start FightScene and pass the selected fighter's key
    this.scene.start("FightScene", { fighter: fighterKey });
  }

  selectFighter(fighter) {
    this.registry.set("fighter", { fighter: fighter });
    this.scene.start("FightScene");
  }

  create() {
    this.add.text(20, 20, "Select Your Fighter");

    const gojoImage = this.add.image(100, 100, "Gojo").setInteractive();
    gojoImage.on("pointerdown", () => {
      this.scene.start("FightScene", { fighter: "Gojo" });
    });

    const shotoImage = this.add.image(200, 200, "Shoto").setInteractive();
    shotoImage.on("pointerdown", () => {
      this.scene.start("FightScene", { fighter: "Shoto" });
    });

    const itachiImage = this.add.image(300, 300, "itachi").setInteractive();
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
      width: 1200,
      height: 600,
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

  //   class SelectFighterScene extends Phaser.Scene {
  //     init(data) {
  //       this.gameRef = data.gameRef;
  //       this.gameContainerRef = data.gameContainerRef;
  //     }
  //     constructor() {
  //       super({ key: "SelectFighterScene" });
  //     }

  //     preload() {
  //       this.load.image("Gojo", "Sprite-Folder/Characters/Gojo/mugshot.png");
  //       this.load.image("Shoto", "Sprite-Folder/Characters/Shoto/mugshot.png");
  //       this.load.image("itachi", "Sprite-Folder/Characters/Itachi/mugshot.png");
  //     }

  //     startFightScene(fighter) {
  //       this.registry.set("fighter", fighter);
  //       this.scene.start("FightScene");
  //     }

  //     create() {
  //       this.add.text(20, 20, "Select Your Fighter");

  //       const gojoImage = this.add.image(100, 100, "Gojo").setInteractive();
  //       this.add.existing(gojoImage);

  //       gojoImage.on("pointerdown", () => {
  //         this.startFightScene("Gojo");
  //       });

  //       const shotoImage = this.add.image(200, 200, "Shoto").setInteractive();
  //       this.add.existing(shotoImage);

  //       shotoImage.on("pointerdown", () => {
  //         this.startFightScene("Shoto");
  //       });

  //       const itachiImage = this.add.image(300, 300, "itachi").setInteractive();
  //       this.add.existing(itachiImage);

  //       itachiImage.on("pointerdown", () => {
  //         this.startFightScene("Itachi");
  //       });
  //     }

  //     startFightScene(fighter) {
  //       this.registry.set("fighter", { fighter });
  //       this.scene.start("FightScene");
  //     }
  //   }

  //   const config = {
  //     type: Phaser.AUTO,
  //     width: 1200,
  //     height: 1200,
  //     scene: [
  //       {
  //         key: "SelectFighterScene",
  //         scene: SelectFighterScene,
  //         gameRef,
  //         gameContainerRef,
  //       },
  //     ],
  //     physics: {
  //       default: "arcade",
  //       arcade: {
  //         gravity: { y: 200 },
  //       },
  //     },
  //   };

  //   useEffect(() => {
  //     gameContainerRef.current = document.createElement("div");
  //     gameContainerRef.current.id = "game-container";
  //     document.body.appendChild(gameContainerRef.current);

  //     gameRef.current = new Phaser.Game(config);

  //     return () => {
  //       if (gameRef.current) {
  //         gameRef.current.destroy(true);
  //       }
  //       if (gameContainerRef.current) {
  //         document.body.removeChild(gameContainerRef.current);
  //       }
  //     };
  //   }, []);

  return <div id="game-container">{<h1>Select Your Fighter</h1>}</div>;
}

export default SelectYourFighter;
