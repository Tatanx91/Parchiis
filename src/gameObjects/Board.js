
class Board extends Phaser.GameObjects.Image {

    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
        this.setScale(0.6);
    }

}

export default Board;