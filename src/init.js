import BoardScene from './scenes/BoardScene.js';
import Bootloader from './Bootloader.js';

const config = {
    width: 600,
    height: 600,
    parent: "container",
    type: Phaser.CANVAS,
    backgroundColor: '#33B5FF',
    scene: [ Bootloader, BoardScene ],
    physics: {
        default: "arcade"
    }
}


new Phaser.Game(config);