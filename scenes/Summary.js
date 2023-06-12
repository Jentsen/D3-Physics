class Summary extends Phaser.Scene {
    constructor() {
        super('summary');
    }
    create() {
        levelCounter++;

        if (levelCounter == 1) {
            this.add.text(game.config.width / 2, game.config.height / 2, 'You Cleared the First Level!', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5);
            this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'Click to Continue', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5)
                .setInteractive()
                .on('pointerdown', () => {
                    this.scene.start('scene2');
                }
                );
        }
        if (levelCounter == 2) {
            this.add.text(game.config.width / 2, game.config.height / 2, 'You Cleared the Second Level!', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5);
            this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'Click to Continue', {
                fontSize: '48px',
                fill: '#0f0'
            })
                .setOrigin(0.5)
                .setInteractive()
                .on('pointerdown', () => {
                    this.scene.start('scene3');
                }
                );
        }
        if (levelCounter == 3) {
            if (levelCounter == 3) {
                this.add.text(game.config.width / 2, game.config.height / 2, 'You Cleared the first Level!', {
                    fontSize: '48px',
                    fill: '#0f0'
                })
                    .setOrigin(0.5);
                this.add.text(game.config.width / 2, game.config.height / 2 + 50, 'Play Again?', {
                    fontSize: '48px',
                    fill: '#0f0'
                })
                    .setOrigin(0.5)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.scene.start('scene1');
                    }
                    );
            }
        }
    }
}