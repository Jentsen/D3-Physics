class Summary extends Phaser.Scene {
    constructor() {
        super('summary');
    }
    create() {
        levelCounter++;

        if (levelCounter == 1) {
            this.add.text(game.config.width / 2, game.config.height / 2, 'You cleared the First Level!', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5);

            this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'But how are you at avoiding obstacles?', {
                fontSize: '16px',
                fill: '#0f0'
            })
                .setOrigin(0.5);

            this.add.text(game.config.width / 2, game.config.height / 2 + 75, 'Click to Continue', {
                fontSize: '24px',
                fill: '#ffffff',
                backgroundColor: '#FF0000',
                padding: {
                    x: 10,
                    y: 5
                }
            })
                .setOrigin(0.5)
                .setInteractive()
                .on('pointerdown', () => {
                    this.scene.start('scene2');
                });
        }
        if (levelCounter == 2) {
            this.add.text(game.config.width / 2, game.config.height / 2, 'You cleared the Second Level!', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5);

            this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'Have you tried clicking again?', { 
                fontSize: '16px',
                fill: '#0f0'
            })
                .setOrigin(0.5);

            this.add.text(game.config.width / 2, game.config.height / 2 + 75, 'Click to Continue', {
                fontSize: '24px',
                fill: '#ffffff',
                backgroundColor: '#FF0000',
                padding: {
                    x: 10,
                    y: 5
                }
            })
                .setOrigin(0.5)
                .setInteractive()
                .on('pointerdown', () => {
                    this.scene.start('scene3');
                });
        }
        if (levelCounter == 3) {
            if (levelCounter == 3) {
                this.add.text(game.config.width / 2, game.config.height / 2, 'Congratulations! You win!', {
                    fontSize: '48px',
                    fill: '#0f0'
                })
                    .setOrigin(0.5);
                this.add.text(game.config.width / 2, game.config.height / 2 + 75, 'Play Again?', {
                    fontSize: '24px',
                    fill: '#ffffff',
                    backgroundColor: '#FF0000',
                    padding: {
                        x: 10,
                        y: 5
                    }
                })
                    .setOrigin(0.5)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.start('scene1');
                    });
            }
        }
    }
}