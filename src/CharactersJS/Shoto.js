import React from "react";
import phaser from "phaser";

class Shoto {
  constructor(scene, sprite) {
    this.scene = scene;
    this.sprite = this.scene.physics.add.sprite(200, 200, "shotoStance_0");
  }

  loadShotoStanceImages() {
    for (let i = 0; i < 3; i++) {
      this.scene.load.image(
        `shotoStance_${i}`,
        `Sprite-Folder/Characters/Shoto/shotoStance_${i}.png`
      );
    }
    this.sprite = this.scene.physics.add.sprite(100, 100, "shotoStance_0");
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

  stance() {
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
    this.sprite.anims.play("stance", true);
  }

  run() {
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
    this.sprite.anims.play("run", true);
  }

  update() {}
}

export default Shoto;
