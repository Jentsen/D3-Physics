let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { 
                y: 300
            }
        }
    },
    // scene: [Intro, GameOver, Scene1]
    scene: [Intro, Scene1, GameOver]
};

let game = new Phaser.Game(config);