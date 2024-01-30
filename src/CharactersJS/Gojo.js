import react, { useEffect } from "react";
import phaser from "phaser";

class Gojo {
  constructor(scene, sprite) {
    this.scene = scene;
    this.loadGojoStanceImages();
  }

  loadGojoStanceImages() {
    for (let i = 0; i < 3; i++) {
      this.scene.load.image(
        `gojoStance_${i}`,
        `Sprite-Folder/Characters/Gojo/gojoStance_${i}.png`
      );
    }
    this.sprite = this.scene.physics.add.sprite(100, 100, "gojoStance_0");
  }
  static preload(scene) {
    scene.load.image(
      "gojoStance_0",
      "Sprite-Folder/Characters/Gojo/gojoStance_0.png"
    );
    scene.load.image(
      "gojoStance_1",
      "Sprite-Folder/Characters/Gojo/gojoStance_1.png"
    );
    scene.load.image(
      "gojoStance_2",
      "Sprite-Folder/Characters/Gojo/gojoStance_2.png"
    );
    scene.load.image(
      "gojoWalk_0",
      "Sprite-Folder/Characters/Gojo/gojoWalk_0.png"
    );
    scene.load.image(
      "gojoWalk_1",
      "Sprite-Folder/Characters/Gojo/gojoWalk_1.png"
    );
    scene.load.image(
      "gojoWalk_2",
      "Sprite-Folder/Characters/Gojo/gojoWalk_2.png"
    );
    scene.load.image(
      "gojoWalk_3",
      "Sprite-Folder/Characters/Gojo/gojoWalk_3.png"
    );
    scene.load.image(
      "gojoWalk_4",
      "Sprite-Folder/Characters/Gojo/gojoWalk_4.png"
    );
    scene.load.image(
      "gojoWalk_5",
      "Sprite-Folder/Characters/Gojo/gojoWalk_5.png"
    );
    scene.load.image(
      "gojoJump_0",
      "Sprite-Folder/Characters/Gojo/gojoJump_0.png"
    );
    scene.load.image(
      "gojoJump_1",
      "Sprite-Folder/Characters/Gojo/gojoJump_1.png"
    );
    scene.load.image(
      "gojoJump_2",
      "Sprite-Folder/Characters/Gojo/gojoJump_2.png"
    );
    scene.load.image(
      "gojoJump_3",
      "Sprite-Folder/Characters/Gojo/gojoJump_3.png"
    );
    scene.load.image(
      "gojoDomainExpansion_0",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_0.png"
    );
    scene.load.image(
      "gojoDomainExpansion_1",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_1.png"
    );
    scene.load.image(
      "gojoDomainExpansion_2",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_2.png"
    );
    scene.load.image(
      "gojoDomainExpansion_3",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_3.png"
    );
    scene.load.image(
      "gojoDomainExpansion_4",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_4.png"
    );
    scene.load.image(
      "gojoDomainExpansion_5",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_5.png"
    );
    scene.load.image(
      "gojoDomainExpansion_6",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_6.png"
    );
    scene.load.image(
      "gojoDomainExpansion_7",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_7.png"
    );
    scene.load.image(
      "gojoDomainExpansion_8",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_8.png"
    );
    scene.load.image(
      "gojoDomainExpansion_9",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_9.png"
    );
    scene.load.image(
      "gojoDomainExpansion_10",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_10.png"
    );
    scene.load.image(
      "gojoDomainExpansion_11",
      "Sprite-Folder/Characters/Gojo/gojoDomainExpansion_11.png"
    );
  }

  createAnimation() {
    this.scene.anims.create({
      key: "Stance",
      frames: [
        { key: "gojoStance_0" },
        { key: "gojoStance_1" },
        { key: "gojoStance_2" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "Walk",
      frames: [
        { key: "gojoWalk_0" },
        { key: "gojoWalk_1" },
        { key: "gojoWalk_2" },
        { key: "gojoWalk_3" },
        { key: "gojoWalk_4" },
        { key: "gojoWalk_5" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "Jump",
      frames: this.scene.anims.generateFrameNumbers("gojoJump", {
        start: 0,
        end: 3,
        zeroPad: 1,
        prefix: "gojoJump_",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "DomainExpansion",
      frames: this.scene.anims.generateFrameNumbers("gojoDomainExpansion", {
        start: 0,
        end: 11,
        zeroPad: 1,
        prefix: "gojoDomainExpansion_",
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  stance() {
    this.scene.anims.create({
      key: "Stance",
      frames: [
        { key: "gojoStance_0" },
        { key: "gojoStance_1" },
        { key: "gojoStance_2" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.sprite.anims.play("Stance", true);
  }

  walk() {
    this.scene.anims.create({
      key: "Walk",
      frames: [
        { key: "gojoWalk_0" },
        { key: "gojoWalk_1" },
        { key: "gojoWalk_2" },
        { key: "gojoWalk_3" },
        { key: "gojoWalk_4" },
        { key: "gojoWalk_5" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.sprite.anims.play("Walk", true);
    this.sprite.setVelocityX(200);
  }

  jump() {
    this.scene.anims.create({
      key: "Jump",
      frames: [
        { key: "gojoJump_0" },
        { key: "gojoJump_1" },
        { key: "gojoJump_2" },
        { key: "gojoJump_3" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.sprite.anims.play("Jump", true);
  }

  ultimateAttack() {
    this.scene.anims.create({
      key: "UltimateAttack",
      frames: [
        { key: "gojoDomainExpansion_0" },
        { key: "gojoDomainExpansion_1" },
        { key: "gojoDomainExpansion_2" },
        { key: "gojoDomainExpansion_3" },
        { key: "gojoDomainExpansion_4" },
        { key: "gojoDomainExpansion_5" },
        { key: "gojoDomainExpansion_6" },
        { key: "gojoDomainExpansion_7" },
        { key: "gojoDomainExpansion_8" },
        { key: "gojoDomainExpansion_9" },
        { key: "gojoDomainExpansion_10" },
        { key: "gojoDomainExpansion_11" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.sprite.anims.play("UltimateAttack", true);
  }

  update() {}
}

export default Gojo;
