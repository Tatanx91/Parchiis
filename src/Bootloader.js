
class Bootloader extends Phaser.Scene {

    constructor() {
        super({ key: "Bootloader" })
    }

    preload() {
        //lanazar cuando la escena se haya cargado completamente
        this.load.on('complete', () => {
            //llamar escena principal
            this.scene.start('BoardScene');
        });

        //tablero
        this.load.image('board', 'assets/board.png');
        this.load.image('red', 'assets/red.png');
        this.load.image('yellow', 'assets/yellow.png');

        //jugadores
        this.players = [ 'red', 'yellow' ];
        this.movement = false;

        //dados
        this.load.spritesheet('dices', 'assets/dice-init.png', { frameWidth: 157, frameHeight: 158 });
        this.load.image('dice01', 'assets/dice1.png');
        this.load.image('dice02', 'assets/dice2.png');
        this.load.image('dice03', 'assets/dice3.png');
        this.load.image('dice04', 'assets/dice4.png');
        this.load.image('dice05', 'assets/dice5.png');
        this.load.image('dice06', 'assets/dice6.png');

    }

}

export default Bootloader;