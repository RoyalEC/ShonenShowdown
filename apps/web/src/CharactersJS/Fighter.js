class Fighter {
  constructor(scene, sprite) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(0, 0, sprite);
  }
}

export default Fighter;
