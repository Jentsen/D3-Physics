let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { 
                y: 300
            }
        }
    },
    scene: [Intro, Scene1, Scene2, Scene3, Summary, GameOver]
};

let game = new Phaser.Game(config);

levelCounter = 0;