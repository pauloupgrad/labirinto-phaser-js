var menuState = {
    create: function(){
        this.music = game.add.audio('music');              
        this.music.loop = true;
        this.music.volume = .5;
        this.music.play();

        var txtLabirinto = game.add.text(game.world.centerX,150,'LABIRINTO DOS FALNOS',{font:'25px emulogic',fill:'#fff'});
            txtLabirinto.anchor.set(.5);

        var txtPressStart = game.add.text(game.world.centerX,550,'PRESS START',{font:'20px emulogic',fill:'#fff'}); 
            txtPressStart.anchor.set(.5);
            
        //Efeito para movimentar txtPressStart
        game.add.tween(txtPressStart).to({y:250},1000).start();
        
        //Botão só terá a ação de start após o carregamento completo do texto (1000).
        game.time.events.add(1000,function(){
            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
                enterKey.onDown.addOnce(this.startGame,this);
        },this);
    },

    startGame: function(){       
        this.music.stop();
        game.state.start('stage1');
    }
};
