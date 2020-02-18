
class Piece extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
        this.setScale(0.7);
    }

}

export default Piece;