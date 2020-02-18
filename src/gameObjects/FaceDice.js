
class FaceDice extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
        this.setScale(0.4);
        this.visible = false;
    }

}

export default FaceDice;