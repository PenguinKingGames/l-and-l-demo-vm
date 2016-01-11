import * as screenTypes from '../../constants/Screens';

export default {

  continue: function(state, action) {
    if (action.continueSpec.nextLine || action.continueSpec.conditional) {
      let currentScene = state.scene;
      let character = state.character;
      let flags = state.flags;
      let nextLine;
      let continueSpec = action.continueSpec;

      if (continueSpec.conditional) {
        let criteriaFulfilled = continueSpec.conditional.criteria.some(function(criteria) {
          if (criteria.type === 'flag' && flags[criteria.flag]) {
            nextLine = criteria.nextLine;
            return true;
          }
          return false;
        });

        if (!criteriaFulfilled) {
          nextLine = criteria.default;
        }
      } else {
        nextLine = continueSpec.nextLine;
      }

      currentScene.currentLine = nextLine;

      if (continueSpec.flowers) {
        if (continueSpec.flowers.rose) {
          character.flowers.rose += continueSpec.flowers.rose;
        }
        if (action.continueSpec.flowers.lily) {
          character.flowers.lily += continueSpec.flowers.lily;
        }
        if (action.continueSpec.flowers.iris) {
          character.flowers.iris += continueSpec.flowers.iris;
        }
        if (action.continueSpec.flowers.azalea) {
          character.flowers.azalea += continueSpec.flowers.azalea;
        }
        if (action.continueSpec.flowers.chrysanthemum) {
          character.flowers.crysanthemum += continueSpec.flowers.chrysanthemum;
        }
      }

      if (continueSpec.flag) {
        flags[continueSpec.flag] = true;
      }

      return {
        ...state,
        character: character,
        scene: currentScene,
        flags: flags
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
