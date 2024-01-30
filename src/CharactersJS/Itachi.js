import Phaser from "phaser";

class Itachi {
  constructor(scene, sprite) {
    this.scene = scene;
    this.sprite = sprite;
  }

  static preload(scene) {
    scene.load.image("ult_1", "Sprite-Folder/Characters/itachi/ult_1.png");
    scene.load.image("ult_2", "Sprite-Folder/Characters/itachi/ult_2.png");
    scene.load.image("ult_3", "Sprite-Folder/Characters/itachi/ult_3.png");
    scene.load.image("ult_4", "Sprite-Folder/Characters/itachi/ult_4.png");
    scene.load.image("ult_5", "Sprite-Folder/Characters/itachi/ult_5.png");
    scene.load.image();
    scene.load.image(
      "fireball_110",
      "Sprite-Folder/Characters/itachi/fireball_110.png"
    );
    scene.load.image(
      "fireball_120",
      "Sprite-Folder/Characters/itachi/fireball_120.png"
    );
    scene.load.image(
      "fireball_130",
      "Sprite-Folder/Characters/itachi/fireball_130.png"
    );
    scene.load.image(
      "fireball_140",
      "Sprite-Folder/Characters/itachi/fireball_140.png"
    );
    scene.load.image(
      "fireball_150",
      "Sprite-Folder/Characters/itachi/fireball_150.png"
    );
    scene.load.image(
      "fireball_160",
      "Sprite-Folder/Characters/itachi/fireball_160.png"
    );
    scene.load.on("complete", () => {
      const frames = scene.anims.generateFrameNumbers("ult", {
        start: 1,
        end: 5,
        zeroPad: 1,
        prefix: "ult_",
        suffix: ".png",
      });
      const frames2 = scene.anims.generateFrameNumbers("fireball", {
        start: 110,
        end: 160,
        zeroPad: 1,
        prefix: "fireball_",
        suffix: ".png",
      });
    });
  }

  stance() {}

  run() {
    this.sprite.anims.play("run", true);
    this.sprite.setVelocityX(200);
  }

  jump() {
    this.sprite.anims.play("jump", true);
    this.sprite.setVelocityY(-300);
  }

  ultimateAttack() {
    this.sprite.anims.play("ult", true);
    this.sprite.on(
      "animationcomplete",
      () => {
        const fireball = this.scene.physics.add.sprite(
          this.sprite.x,
          this.sprite.y,
          "fireball_110"
        );
        fireball.anims.play("fireball", true);
        fireball.setVelocityX(600);
        fireball.body.setAllowGravity(false);
      },
      this
    );
  }
}

export default Itachi;
