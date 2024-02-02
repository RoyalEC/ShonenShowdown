import React from "react";
import phaser from "phaser";

class Shoto {
  constructor(scene, cursors) {
    this.scene = scene;
    this.cursors = cursors;
    this.sprite = this.scene.physics.add.sprite(200, 200, "shotoStance_0");
    this.createAnimation();
  }

  static preload(scene) {
    scene.load.image(
      "shotoStance_0",
      "Sprite-Folder/Characters/Shoto/shotoStance_0.png"
    );
    scene.load.image(
      "shotoStance_1",
      "Sprite-Folder/Characters/Shoto/shotoStance_1.png"
    );
    scene.load.image(
      "shotoStance_2",
      "Sprite-Folder/Characters/Shoto/shotoStance_2.png"
    );
    scene.load.image(
      "shotoStance_3",
      "Sprite-Folder/Characters/Shoto/shotoStance_3.png"
    );
    scene.load.image(
      "shotoStance_4",
      "Sprite-Folder/Characters/Shoto/shotoStance_4.png"
    );
    scene.load.image(
      "shotoRun_0",
      "Sprite-Folder/Characters/Shoto/shotoRun_0.png"
    );
    scene.load.image(
      "shotoRun_1",
      "Sprite-Folder/Characters/Shoto/shotoRun_1.png"
    );
    scene.load.image(
      "shotoRun_2",
      "Sprite-Folder/Characters/Shoto/shotoRun_2.png"
    );
    scene.load.image(
      "shotoRun_3",
      "Sprite-Folder/Characters/Shoto/shotoRun_3.png"
    );
    scene.load.image(
      "shotoRun_4",
      "Sprite-Folder/Characters/Shoto/shotoRun_4.png"
    );
    scene.load.image(
      "shotoRun_5",
      "Sprite-Folder/Characters/Shoto/shotoRun_5.png"
    );
    scene.load.image(
      "shotoRun_6",
      "Sprite-Folder/Characters/Shoto/shotoRun_6.png"
    );
    scene.load.image(
      "shotoRun_7",
      "Sprite-Folder/Characters/Shoto/shotoRun_7.png"
    );
  }

  createAnimation() {
    this.scene.anims.create({
      key: "stance",
      frames: [
        { key: "shotoStance_0" },
        { key: "shotoStance_1" },
        { key: "shotoStance_2" },
        { key: "shotoStance_3" },
        { key: "shotoStance_4" },
      ],
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "run",
      frames: [
        { key: "shotoRun_0" },
        { key: "shotoRun_1" },
        { key: "shotoRun_2" },
        { key: "shotoRun_3" },
        { key: "shotoRun_4" },
        { key: "shotoRun_5" },
        { key: "shotoRun_6" },
        { key: "shotoRun_7" },
      ],
      frameRate: 10,
      repeat: -1,
    });
  }

  run() {
    this.sprite.anims.play("run", true);
  }

  stance() {
    this.sprite.anims.play("stance", true);
  }

  update(cursors) {
    if (cursors.left.isDown) {
      this.run();
      this.sprite.x -= 5;
      this.sprite.flipX = true; // Sprite faces left
    } else if (cursors.right.isDown) {
      this.run();
      this.sprite.x += 5;
      this.sprite.flipX = false; // Sprite faces right (default)
    } else {
      this.stance(); // Play idle animation when not moving
    }

    // if (cursors.up.isDown) {
    //   this.jump();
    // } else if (cursors.down.isDown) {
    //   this.ultimateAttack();
    // }
  }
}

export default Shoto;
