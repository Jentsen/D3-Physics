class Intro extends Phaser.Scene{
    constructor(){
        super('intro');
    }

    preload(){
        this.load.path = 'assets/';
        this.load.image('logo', 'logo.png');
        this.load.audio('intro', 'intro.mp3');
    }

    create(){
        //logo animation
        const logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo');
        logo.setOrigin(0.5);
        logo.visible = false;

        //logo sound
        this.time.delayedCall(1000, () => {
            this.sound.play('intro');
        });

        this.cameras.main.fadeIn(1500);

        this.time.delayedCall(1000, () => {
            logo.visible = true;
            this.tweens.add({
                targets: logo,
                scale: { from: 0, to: .5 },
                duration: 2750,
                ease: 'power2'
            });

            // logo pulses and shakes
            this.time.delayedCall(2750, () => {
                this.tweens.add({
                    targets: logo,
                    scale: { from: .5, to: .6 },
                    duration: 50,
                    easeOut: 'power2',
                    yoyo: true,
                })
                this.tweens.add({
                    targets: logo,
                    angle: { from: 0, to: 5 },
                    duration: 50,
                    easeIn: 'power2',
                    yoyo: true,
                })
            });

            this.tweens.add({
                targets: logo,
                alpha: { from: 0, to: 1 },
                duration: 1000,
                ease: 'Power2'
            });
        });

        // change scenes if 6 seconds pass
        this.time.delayedCall(6000, () => {
            this.cameras.main.fadeOut(1500);
            this.scene.start('scene1');
        });


        // change scenes if clicked down
        this.input.on('pointerdown', () => {
            this.cameras.main.fadeOut(1500);
            this.scene.start('scene1');
        });
    }
}