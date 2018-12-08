var stage1State = {
    create: function(){
        game.add.sprite(0,0,'bg');

        this.maze = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,3,0,0,0,0,0,0,0,0,0,0,0,3,1],
            [1,0,1,1,0,1,0,1,1,1,0,1,1,0,1],
            [1,0,1,3,0,1,3,0,0,1,0,3,1,0,1],
            [1,0,0,0,1,1,1,1,0,1,0,1,1,0,1],
            [1,0,0,0,0,1,0,2,0,0,0,0,0,0,1],
            [1,0,1,3,0,0,0,0,1,0,0,3,1,0,1],
            [1,0,1,1,1,1,0,1,1,0,1,1,1,0,1],
            [1,3,0,0,0,0,0,3,1,0,0,0,0,3,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            
        ];

        this.blocks = game.add.group();
        this.blocks.enableBody = true;

        for(var row in this.maze){
            for(var col in this.maze[row]){
                var tile = this.maze[row][col];

                var x = col * 50;
                var y = row * 50;

                if(tile === 1){
                    var block = this.blocks.create(x,y,'block');
                        block.body.immovable = true;
                } else if(tile === 2){
                    this.player = game.add.sprite(x + 25, y + 25, 'player');
                    this.player.anchor.set(.5);
                    game.physics.arcade.enable(this.player);


                }
            }//Fim for col
        }//Fim for row

        //Controles
        this.controls = game.input.keyboard.createCursorKeys();

    },//Fim create

    update: function(){
        game.physics.arcade.collide(this.player, this.blocks);
        this.movePlayer();
    },//Fim updade

    //Função movePlayer
    movePlayer: function(){
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if(this.controls.left.isDown && !this.controls.right.isDown){
            this.player.body.velocity.x = -100;
        }
        if(this.controls.right.isDown && !this.controls.left.isDown){
            this.player.body.velocity.x = 100;
        }
        if(this.controls.up.isDown && !this.controls.down.isDown){
            this.player.body.velocity.y = -100;
        }
        if(this.controls.down.isDown && !this.controls.up.isDown){
            this.player.body.velocity.y = 100;
        }

    }
};
