import { PREVIEW, SELECT } from '../constants/LifeMapActionTypes';

import * as scenes from '../resources/scenes';
import * as maps from '../resources/lifeMaps';

const initialMap = 'exteriorMap';

const mapData = {
  ...maps[initialMap],
  scenes: scenes
};

//By convention we only mutate the stuff directly declared in this object, not the spread imports

const initialState = {
  ...mapData,
  availableScenes: ['tsukikoRajaniDemo', 'tsukikoRajaniChoices'],
  previewingScene: ''
};

export default function lifeMap(state = initialState, action) {
  switch (action.type) {

    case PREVIEW:
      return {
        ...state,
        previewingScene: action.scene
      };
      break;

    default:
      return state;
  }
}
