/*
 * A single level of the game.
 * Each level will need to have its own file.
 * Make sure they have different file names and different state names.
 * For example, you could use 'level2.js' and 'level2State'
 */
var level1State = {
	/* Run once as the state starts */
	create: function() {
		// Sound creation

		// Background creation

		// Level creation

		// Player creation
		player = game.add.sprite (game.world.centerX, game.world.centerY, 'emu');
		game.physics.arcade.enable(player);
		player.anchor.setTo(0.5);
		player.health = 100;
		player.hunger = 10;
		player.speed = 150;

		playerControls =  {
			up: game.input.keyboard.addKey(Phaser.KeyCode.W),
			down: game.input.keyboard.addKey(Phaser.KeyCode.S),
			left: game.input.keyboard.addKey(Phaser.KeyCode.A),
			right: game.input.keyboard.addKey(Phaser.KeyCode.D),
		};

		// Other creation

		// UI creation
	},
	// End of the CREATE() function

	/* Runs each frame of the game */
	update: function() {
		/* Collision and overlap checks */

		/* Player input and movement */
		if(playerControls.up.isDown){
			player.body.velocity.y = -player.speed;
		} else if(playerControls.down.isDown){
			player.body.velocity.y = player.speed;
		}
		else {
			player.body.velocity.y = 0;
		}
		if(playerControls.left.isDown){
			player.body.velocity.x = -player.speed;
		} else if(playerControls.right.isDown){
			player.body.velocity.x = player.speed;
		} else {
			player.body.velocity.x = 0;
		}


		/* Other actions */

	},
	// End of the UPDATE() function

	/* Add more functions as required */


	/* Go to the gameover state */
	lose: function() {
		game.state.start('gameover');
	},
	// End of the LOSE() function

	/* Go to the win state */
	win: function() {
		game.state.start('win');
	}
	// End of the WIN() function
};
// End of the file -- NOTHING CAN GO BELOW THIS LINE!!!
