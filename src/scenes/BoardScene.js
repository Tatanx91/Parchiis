import data from '../Boardbox.js'
import OperationsLogic from '../Logic.js'
import Dice from '../gameObjects/Dice.js';
import Piece from '../gameObjects/Piece.js';
import Board from '../gameObjects/Board.js';
import FaceDice from '../gameObjects/FaceDice.js';

class BoardScene extends Phaser.Scene {

    constructor() {
        super({key: "BoardScene"});
    }

    create() {
        //Tamaño del canvas //this.sys.game.config.width
        // Board
        let board = new Board(this, 300, 300, 'board');//this.add.sprite(300, 300, 'board');
        this.twoDice = true;
        
        //players
        this.red = new Piece(this, data[39].posx, data[39].posy, 'red');//this.add.sprite(236, 137, 'red');
        this.yellow = new Piece(this, data[5].posx, data[5].posy, 'yellow');//this.add.sprite(data[1].posx, data[1].posy, 'yellow');

        //dados
        this.dice1 = new Dice(this, 275, 310, 'dices', OperationsLogic.throwDice1);//this.add.sprite(275, 310, 'dices');
        this.dice2 = new Dice(this, 320, 310, 'dices', OperationsLogic.throwDice2);//this.add.sprite(320, 310, 'dices');

        this.dice01 = new FaceDice(this, 275, 310, 'dice01');
        this.dice02 = new FaceDice(this, 275, 310, 'dice02');
        this.dice03 = new FaceDice(this, 275, 310, 'dice03');
        this.dice04 = new FaceDice(this, 275, 310, 'dice04');
        this.dice05 = new FaceDice(this, 275, 310, 'dice05');
        this.dice06 = new FaceDice(this, 275, 310, 'dice06');

        this.dice11 = new FaceDice(this, 320, 310, 'dice01');
        this.dice22 = new FaceDice(this, 320, 310, 'dice02');
        this.dice33 = new FaceDice(this, 320, 310, 'dice03');
        this.dice44 = new FaceDice(this, 320, 310, 'dice04');
        this.dice55 = new FaceDice(this, 320, 310, 'dice05');
        this.dice66 = new FaceDice(this, 320, 310, 'dice06');

        //borrar luego
        this.rigth = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.rigth2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.left2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.up2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.down2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.index = 6;

    }

    update(time, delta) {
        if(this.rigth.isDown)
            this.red.x++;
        if(this.left.isDown)
            this.red.x--;
        if(this.up.isDown)
            this.red.y--;
        if(this.down.isDown)
            this.red.y++;

        if(this.rigth2.isDown)
            this.yellow.x++;
        if(this.left2.isDown)
            this.yellow.x--;
        if(this.up2.isDown)
            this.yellow.y--;
        if(this.down2.isDown)
            this.yellow.y++;    

        document.getElementById('spnX').innerText = "R pos x = " + this.red.x;
        document.getElementById('spnY').innerText = "R pos y = " + this.red.y;

        document.getElementById('spnX2').innerText = "Y pos x = " + this.yellow.x;
        document.getElementById('spnY2').innerText = "Y pos y = " + this.yellow.y;
        
        OperationsLogic.executeMoves(this.yellow, this);
        OperationsLogic.executeMoves(this.yellow, this);

    }
}

export default BoardScene;