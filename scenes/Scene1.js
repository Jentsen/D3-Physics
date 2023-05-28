class Scene1 extends Phaser.Scene {
    constructor() {
        super('scene1');
    }
    create() {
        //fade in
        this.cameras.main.fadeIn(1500);

        //controls text
        this.add.text(0, 0, 'Use Mouse to Aim and Shoot!', { fill: '#FFFFFF' });
        //restart text button
        let restart = this.add.text(game.config.width - 75, 0, 'Restart', { fill: '#FFFFFF' })
        restart.setInteractive();
        restart.on('pointerdown', () => {
            this.scene.start('scene1');
        });

        //timer text
        const countdown = 15;
        let timer = countdown;
        const timerText = this.add.text(game.config.width/2, 15, '', {fill: '#ffffff' })
        .setDepth(1)
        .setOrigin(0.5);

        //update timer each second
        const timerInterval = setInterval(() => {
            timer--;
            timerText.setText(`Time: ${timer} s`);

            if (timer <= 0) {
                clearInterval(timerInterval);
                this.scene.start('gameover');
            }
        }, 1000);

        const shooter = this.add.rectangle(25, 480, 80, 80, 0x00FF00)
            .setDepth(1);
        const ball = this.add.circle(shooter.x, shooter.y - 25, 10, 0xff0000)
            .setOrigin(0, 0);
        this.physics.add.existing(ball);
        const goal = this.add.ellipse(420, 450, 75, 50, 0x00FF00)
        this.physics.add.existing(goal);
        goal.body.setImmovable(true);
        goal.body.setAllowGravity(false);

        this.physics.add.collider(ball, goal, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'Hit!', {
                fontSize: '48px',
                fill: '#0f0'
            })
            .setOrigin(0.5);
            ball.body.setImmovable(true);
            ball.body.setAllowGravity(false);
            this.time.delayedCall(2000, () => {
                this.scene.start('summary');
            });
        });
        const graphics = this.add.graphics({ lineStyle: { width: 5, color: 0xffdd00, alpha: 0.3 } });
        const line = new Phaser.Geom.Line();

        ball.body.enable = false;
        ball.body.onCollide = true;
        let angle = 0;

        this.input.on('pointermove', (pointer) => {
            angle = Phaser.Math.Angle.BetweenPoints(shooter, pointer);
            shooter.rotation = angle;
            Phaser.Geom.Line.SetToAngle(line, shooter.x, shooter.y - 20, angle, 128);
            graphics.clear().strokeLineShape(line);
        });

        this.input.on('pointerdown', () => {
            ball.body.enable = true;
            clearInterval(timerInterval);
            // ball.enableBody(true, shooter.x, shooter.y - 50, true, true);
            this.physics.velocityFromRotation(angle, 450, ball.body.velocity);
        });
    }
}