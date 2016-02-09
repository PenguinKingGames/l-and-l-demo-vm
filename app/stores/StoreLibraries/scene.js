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

      let newTime = this.checktime(action, state.time);

      return {
        ...state,
        screen: screenTypes.LIFEMAP,
        time: newTime
      }
    }
    if (action.continueSpec.transitionToScene) {
      //TODO: This code is in like three places, DRY it
      let newTime = this.checktime(action, state.time);

      let newScene = state.scenes[action.continueSpec.transitionToScene];
      let selectedScene = {
        ...newScene,
        currentLine: newScene.initialLine
      };
      return {
        ...state,
        scene: selectedScene,
        screen: screenTypes.SCENE_TRANSITION,
        time: newTime
      };
    }
  },

  checktime: function(action, time) {
    let newTime = {
      day: time.day,
      phase: time.phase
    };

    if (action.continueSpec.advanceTime) {
      if (action.continueSpec.advanceTime.by) {
        newTime = this.advanceTimeByPhases(time, action.continueSpec.advanceTime.by);
      }

      if (action.continueSpec.advanceTime.to) {
        newTime = this.advanceTimeTo(time, action.continueSpec.advanceTime.to.day, action.continueSpec.advanceTime.to.phase);
      }
    }

    return {
      ...time,
      day: newTime.day,
      phase: newTime.phase
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
      scene: scene,
      screen: screenTypes.SCENE
    };
  },

  advanceTimeByPhases: function(timeState, phases) {
    let day = timeState.day;
    let phase = timeState.phase;

    const advanceOnePhase = function() {
      //TODO: constants, make less stupid
      switch (phase) {
        case 'Evening':
          day = day + 1;
          phase = 'Morning';
          break;
        case 'After school':
          phase = 'Evening';
          break;
        case 'Afternoon':
          phase = 'After school';
          break;
        case 'Morning':
          phase = 'Afternoon';
          break;
      }
    };

    for (var i = 0; i < phases - 1; i++) {
      advanceOnePhase();
    }

    return {
      ...timeState,
      day: day,
      phase: phase
    }
  },

  advanceTimeTo: function(timeState, day, phase) {
    return {
      ...timeState,
      day: day,
      phase: phase
    }
  }

};
