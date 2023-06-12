class Scene3 extends Phaser.Scene {
    constructor() {
        super('scene3');
    }
    create() {
        //fade in
        this.cameras.main.fadeIn(1500);

        //controls text
        this.add.text(0, 0, 'Click while midair to double jump!', { fill: '#FFFFFF' });
        //restart text button
        let restart = this.add.text(game.config.width - 75, 0, 'Restart', { fill: '#FFFFFF' })
        restart.setInteractive();
        restart.on('pointerdown', () => {
            this.scene.start('scene3');
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

        //place goal at top right
        const goal = this.add.ellipse(765, 50, 75, 50, 0x00FF00)
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
        
        //place blockers
        const blocker1 = this.add.rectangle(200, 450, 100, 250, 0x0000FF)
            .setDepth(1);
        this.physics.add.existing(blocker1);
        blocker1.body.setImmovable(true);
        blocker1.body.setAllowGravity(false);
        this.physics.add.collider(ball, blocker1, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'Uh-oh!', {
                fontSize: '48px',
                fill: '#0f0'
            })
            .setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('scene3');
            });
        });
        const blocker2 = this.add.rectangle(600, 350, 100, 300, 0x0000FF)
            .setDepth(1);
        this.physics.add.existing(blocker2);
        blocker2.body.setImmovable(true);
        blocker2.body.setAllowGravity(false);
        this.physics.add.collider(ball, blocker2, () => {
            this.add.text(game.config.width/2, game.config.height/2, 'Uh-oh!', {
                fontSize: '48px',
                fill: '#0f0'
            })
            .setOrigin(0.5);
            this.time.delayedCall(2000, () => {
                this.scene.start('scene3');
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
            this.physics.velocityFromRotation(angle, 550, ball.body.velocity);
        });
    }
}