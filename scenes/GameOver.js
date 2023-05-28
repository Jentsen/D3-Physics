class GameOver extends Phaser.Scene{
    constructor(){
       super('gameover'); 
    }
    create(){
        //game over
        this.add.text(game.config.width/2, game.config.height/2, 'Game Over', {
            fontSize: '48px',
            fill: '#0f0',
        })
        .setOrigin(0.5);

        //restart button 
        let restart = this.add.text(game.config.width/2, game.config.height/2 - 75, 'Restart?', {
            fontSize: '24px',
            fill: '#ffffff',
            backgroundColor: '#00ff00',
            padding: {
              x: 10,
              y: 5
            }
        });
        restart.setOrigin(0.5);
        restart.setInteractive();
        restart.on('pointerdown', () => {
            this.scene.start('scene1');
        });
    }    
}