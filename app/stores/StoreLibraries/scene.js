import * as screenTypes from '../../constants/Screens';

export default {

  continue: function(state, action) {
    if (action.continueSpec.nextLine) {
      let currentScene = state.scene;
      let scene = {
        ...currentScene,
        currentLine: action.continueSpec.nextLine
      };
      let character = state.character;

      if (action.continueSpec.flowers) {
        if (action.continueSpec.flowers.rose) {
          character.flowers.rose += action.continueSpec.flowers.rose;
        }
        if (action.continueSpec.flowers.lily) {
          character.flowers.lily += action.continueSpec.flowers.lily;
        }
        if (action.continueSpec.flowers.iris) {
          character.flowers.iris += action.continueSpec.flowers.iris;
        }
        if (action.continueSpec.flowers.azalea) {
          character.flowers.azalea += action.continueSpec.flowers.azalea;
        }
        if (action.continueSpec.flowers.chrysanthemum) {
          character.flowers.crysanthemum += action.continueSpec.flowers.chrysanthemum;
        }
      }

      return {
        ...state,
        character: character,
        scene: scene
      };
    }
    if (action.continueSpec.returnToMap) {
      return {
        ...state,
        screen: screenTypes.LIFEMAP
      }
    }
  },

  start: function(state, action) {
    let currentScene = action.scene;
    let scene = {
      ...currentScene,
      currentLine: currentScene.initialLine
    };
    return {
      ...state,
      scene: scene
    };
  }
};
