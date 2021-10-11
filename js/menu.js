/**
 * Displays a game menu
 * Adjust as needed
 */
var menuState = {
  create: function() {

    // Add a background image to the scene
    game.add.image(0,0,'background');

    // Add a title to the scene
    txtTitle = game.add.text(game.world.centerX, game.world.centerY - 200, '[ADD GAME TITLE HERE]', {
      fill: '#00ff00',
    });
    txtTitle.anchor.setTo(0.5, 0.5);

    // Add a button to start the game
    btnStart = game.add.button(game.world.centerX, game.world.centerY - 75, 'button'); // Create a button object
    btnStart.anchor.setTo(0.5, 0.5);                                                   // Change the anchor point to the center of the sprite
    btnStart.onInputDown.add(function() { btnStart.frame = 1; });                    // When the button is pressed down, change the frame
    btnStart.onInputUp.add(function() { game.state.start('level1'); });                 // When the button is released, start 'level1'
    txtStart = game.add.text(btnStart.x, btnStart.y, 'New Game');                  // Add some text over the top of the button
    txtStart.anchor.setTo(0.5, 0.5);                                                     // Change the anchor point of the text

    // Add a button to tell the game's story
    btnStory = game.add.button(game.world.centerX, game.world.centerY, 'button');
    btnStory.anchor.setTo(0.5, 0.5);
    btnStory.onInputDown.add(function() { btnStory.frame = 1; });
    btnStory.onInputUp.add(function() { game.state.start('story'); });
    txtStory = game.add.text(btnStory.x, btnStory.y, 'Story');
    txtStory.anchor.setTo(0.5, 0.5);

    // Add a button to show the controls
    btnControls = game.add.button(game.world.centerX, game.world.centerY + 75, 'button');
    btnControls.anchor.setTo(0.5, 0.5);
    btnControls.onInputDown.add(function() { btnControls.frame = 1; });
    btnControls.onInputUp.add(function() { game.state.start('controls'); });
    txtControls = game.add.text(btnControls.x, btnControls.y, 'How to play');
    txtControls.anchor.setTo(0.5, 0.5);

    // Add a button to show the game credits
    btnCredits = game.add.button(game.world.centerX, game.world.centerY + 150, 'button');
    btnCredits.anchor.setTo(0.5, 0.5);
    btnCredits.onInputDown.add(function() { btnCredits.frame = 1;});
    btnCredits.onInputUp.add(function() { game.state.start('credits');});
    txtCredits = game.add.text(btnCredits.x, btnCredits.y, 'Credits');
    txtCredits.anchor.setTo(0.5, 0.5);
   }
};
