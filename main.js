let config = {
    type: Phaser.AUTO,
    width: 840,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity : {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Load, Scene1, Post1, Scene2, Post2, Scene3, Post3, End]};

let game = new Phaser.Game(config);