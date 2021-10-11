/**
 * A "controls" screen to show the player how to control the game
 */
var controlsState = {
   create: function() {
     //Controls text
	 controls = "Add your controls here";
	 controls += " \nYou can add additional lines by";
	 controls += " \ncopying and pasting these ones.";
   controls += " \nNote that the '\\n' adds a new line.";
	 txtControls = game.add.text(game.world.centerX, game.world.centerY - 200, controls, {
        fill: '#ffffff'
      });
      txtControls.anchor.setTo(0.5, 0);

     //Back button
     btnBack = game.add.button(game.world.centerX,game.world.height-50,'button');
     btnBack.anchor.setTo(0.5, 0.5);
     btnBack.onInputDown.add(function() { btnBack.frame = 1; });
     btnBack.onInputUp.add(function() { game.state.start( 'menu' ); });
     txtBack = game.add.text(btnBack.x, btnBack.y, 'Main Menu');
     txtBack.anchor.setTo(0.5, 0.5);
  }
};
