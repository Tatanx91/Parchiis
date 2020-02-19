import data from './Boardbox.js';

const operationsLogic = {
	//Prueba github
    executeMoves: (currentPiece, game) => {
        //executeMove
        if(game.movement){
            //this.movement = false;
            if(currentPiece.x > data[game.index].posx)
                currentPiece.x--;
            else if(currentPiece.x < data[game.index].posx)
                currentPiece.x++;

            if(currentPiece.y > data[game.index].posy)
                currentPiece.y--;
            else if(currentPiece.y < data[game.index].posy)
                currentPiece.y++;
            
            if(game.index == game.top)
                game.movement=false;
            if(currentPiece.x == data[game.index].posx && currentPiece.y == data[game.index].posy && game.index <= game.top)
                game.index++;   
        }
    },
    throwDice1: (currentDice, scene) => {
        currentDice.anims.play('rollDices', true);
        const numRandom = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            currentDice.visible = false;
            switch(numRandom){
                case 1:
                    scene.dice01.visible = true;
                break;
                case 2:
                    scene.dice02.visible = true;
                break;
                case 3:
                    scene.dice03.visible = true;
                break;
                case 4: 
                    scene.dice04.visible = true;
                break;
                case 5:
                    scene.dice05.visible = true;
                break;
                case 6:
                    scene.dice06.visible = true;
                break;
            }
            scene.top = scene.index + numRandom;
            scene.movement = true;
        }, 1800);
    },
    throwDice2: (currentDice, scene) => {
        currentDice.anims.play('rollDices', true);
        const numRandom = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            currentDice.visible = false;
            switch(numRandom){
                case 1:
                    scene.dice11.visible = true;
                break;
                case 2:
                    scene.dice22.visible = true;
                break;
                case 3:
                    scene.dice33.visible = true;
                break;
                case 4: 
                    scene.dice44.visible = true;
                break;
                case 5:
                    scene.dice55.visible = true;
                break;
                case 6:
                    scene.dice66.visible = true;
                break;
            }
        }, 1800);
    }

}


export default operationsLogic;