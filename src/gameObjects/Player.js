
class Player extends Phaser.GameObjects.Sprite {

    constructor() {
        super({key: "Player"});
    }
        
    create(){
        this.id = "";
        this.usuario = "";
        this.color = "";
    }
    
}

export default Player;