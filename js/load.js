/*
 * Use this state to load all of your assets
 */
var loadState = {
	preload: function() {
		game.add.sprite(0, 0, 'preloaderBackground');
		// Some simple loading... text
		txtLoading = game.add.text(80, 150, 'loading...', {
			font: '30px Courier',
			fill: '#ffffff'
		});

		/* Add the preloadbar */
		loadBar = game.add.sprite(game.world.centerX, game.world.centerY, 'preloaderBar');
		game.load.setPreloadSprite(loadBar);

		/* Load all the sprites */
		game.load.image('wheat', 'assets/sprites/wheat.png');
		game.load.image('water', 'assets/sprites/water.png');
		game.load.image('emu', 'assets/sprites/emu.png');

		/* Load all the spritesheets */
		game.load.spritesheet('button', 'assets/sprites/button_blank.png', 190, 49);	// Frame 0 = up, Frame 1 = down

		/* Load all the sounds effects */

	},

	// Once everything is loaded, go to the menu state
	create: function() {
		game.state.start('menu');
	}

};
