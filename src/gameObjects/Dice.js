import Logic from '../Logic.js';

class Dice extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, type, eventDice){
        super(scene, x, y, type);
        scene.add.existing(this);
        this.setScale(0.3);
        this.setInteractive();

        scene.anims.create({
            key: 'rollDices',
            frames: scene.anims.generateFrameNumbers('dices', { start: 0, end: 3 }),
            frameRate: 20,
            repeat: 8
        });

        const currentDice = this;
        this.on('pointerdown', (event) => {
            eventDice(currentDice, scene);
            if(scene.twoDice)
                if(scene.dice1 === currentDice)
                    Logic.throwDice2(scene.dice2, scene);
                else
                    Logic.throwDice1(scene.dice1, scene);
        });
    }
    
}

export default Dice;