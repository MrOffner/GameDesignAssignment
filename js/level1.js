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
		game.add.image(0,0,'background');

		// Level creation

		// Player creation

		// Other creation

		// UI creation
	},
	// End of the CREATE() function

	/* Runs each frame of the game */
	update: function() {
		/* Collision and overlap checks */

		/* Player input and movement */

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
