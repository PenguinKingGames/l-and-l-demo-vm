import * as screenTypes from '../../constants/Screens';

export default {
    preview: function(state, action) {
      let currentMap = state.lifeMap;
      let lifeMap = {
        ...currentMap,
        previewingScene: action.scene
      };

      return {
        ...state,
        lifeMap: lifeMap
      };
    },

    select: function(state, action) {
      let newScene = state.scenes[action.scene];
      let selectedScene = {
        ...newScene,
        currentLine: newScene.initialLine
      };
      return {
        ...state,
        scene: selectedScene,
        screen: screenTypes.SCENE_TRANSITION
      };
    }
}
