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

      if (continueSpec.relationship) {
        character.relationships[continueSpec.relationship.type] = continueSpec.relationship.newRelationship;
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
      let lifeMap = state.lifeMap;
      let availableScenes = this.getAvailableScenes(state, newTime);

      return {
        ...state,
        screen: screenTypes.LIFEMAP,
        time: newTime,
        lifeMap: {
          ...lifeMap,
          availableScenes: availableScenes
        }
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

      let lifeMap = state.lifeMap;
      let usedScenes = lifeMap.usedScenes;
      usedScenes.push(action.continueSpec.transitionToScene);

      return {
        ...state,
        scene: selectedScene,
        screen: screenTypes.SCENE_TRANSITION,
        time: newTime,
        lifeMap: {
          ...lifeMap,
          usedScenes: usedScenes
        }
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
  },

  getAvailableScenes: function(state, time) {
    let newAvailable = [];

    let sceneKeys = Object.keys(state.scenes);

    sceneKeys.forEach(function(key) {

      if (state.lifeMap.usedScenes.some(function (usedScene) {
          return usedScene === key;
        })) {
        return;
      }

      if (state.scenes[key]) {
        let scene = state.scenes[key];
        let available = !!scene.availability;  //Don't want the object, just its truthiness

        if (available) {
          if (scene.availability.flag && !state.flags[scene.availability.flag]) {
            available = false;
          }

          if (scene.availability.phase && !(time.phase === scene.availability.phase)) {
            available = false;
          }

          if (scene.availability.on && !(time.day === scene.availability.on)) {
            available = false;
          }

          if (scene.availability.before && !(time.day < scene.availability.before)) {
            available = false;
          }

          if (scene.availability.after && !(time.day > scene.availability.after)) {
            available = false;
          }

          if (scene.availability.relationship) {
            let targetRelationship = scene.availability.relationship;
            let relationshipPresent = false;
            let relationshipKeys = Object.keys(state.character.relationships);

            relationshipKeys.forEach(function(key) {
              let relationship = state.character.relationships[key];
              if (relationship && relationship.characterName === targetRelationship.characterName && relationship.powerTree === targetRelationship.powerTree) {
                relationshipPresent = true;
              }
            });

            if (!relationshipPresent) {
              available = false;
            }
          }
        }

        if (available) {
          newAvailable.push(key);
        }
      }
    });

    return newAvailable;
  }
};
