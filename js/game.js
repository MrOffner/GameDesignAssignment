var config = {
	width: 800,
	height: 600,
	renderer: Phaser.CANVAS,
	parent: 'game-world'
};

/* Our Phaser game object */
var game = new Phaser.Game(config);

						// ( KEY, STATE_NAME)
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('controls', controlsState);
game.state.add('story', storyState);
game.state.add('credits', creditsState);
game.state.add('level1', level1State);
game.state.add('gameover', gameoverState);
game.state.add('win', winState);
/*
 * Add in additional states/levels below
 */


/*
 * Add any global variables for the game such as score or lives
 */
game.global = {
	score: 0,
	lives: 3
};

// Go to the boot state
game.state.start('boot');
