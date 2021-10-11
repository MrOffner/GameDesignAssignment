/**
 * A "story" screen to give some background to the game
 */
var storyState = {
   create: function() {
      //Story text
	  story = "[Add your story here]";

	  txtStory = game.add.text(game.world.centerX, game.world.centerY-200, story, {
		fill: '#ffffff'
	  });
	  txtStory.anchor.setTo(0.5, 0);

      //Back button
      btnBack = game.add.button(game.world.centerX,game.world.height-50,'button');
      btnBack.anchor.setTo(0.5, 0.5);
      btnBack.onInputDown.add(function() { btnBack.frame = 1; });
      btnBack.onInputUp.add(function() { game.state.start('menu'); });
      txtBack = game.add.text(btnBack.x, btnBack.y, 'Main Menu');
      txtBack.anchor.setTo(0.5,0.5);
   }
};
