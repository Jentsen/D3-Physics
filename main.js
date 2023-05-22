// main game obj
let config = {
    type: Phaser.WEBGL,
    width: 840,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { 
                y: 0,
                x: 0
            }
        }
    },
    scene: [Load, Menu, Scene1, Scene2, Scene3]
};

let game = new Phaser.Game(config);