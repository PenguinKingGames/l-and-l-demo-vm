import { CONTINUE, START } from '../constants/SceneActionTypes';
import { PREVIEW, SELECT } from '../constants/LifeMapActionTypes';

import * as scenes from '../resources/scenes';
import * as lifeMaps from '../resources/lifeMaps';
import * as characters from '../resources/characters';
import * as screenTypes from '../constants/Screens';

import sceneLibrary from './StoreLibraries/scene'
import lifeMapLibrary from './StoreLibraries/lifeMap'


const initialScene = 'tsukikoRajaniDemo';
const initialSceneData = scenes[initialScene];
const initialMap = 'exteriorMap';
const initialLifeMapData = lifeMaps[initialMap];



//By convention we only mutate the stuff directly declared in this object, not the spread imports
const initialState = {
  scenes: scenes,
  lifeMaps: lifeMaps,
  characters: characters,
  scene: {
    ...initialSceneData,
    currentLine: initialSceneData.initialLine
  },
  lifeMap: {
    ...initialLifeMapData,
    availableScenes: ['aiyanaRajaniClubRoom', 'tsukikoRajaniDemo', 'tsukikoRajaniChoices', 'tsukikoRajaniAfterSchool', 'tsukikoRajaniBetweenClasses', 'tsukikoRajaniFlowers', 'tsukikoRajaniClubRoom'],
    previewingScene: ''
  },
  character: characters['tsukiko'],
  screen: screenTypes.LIFEMAP
};

export default function game(state = initialState, action) {
  switch (action.type) {

    case START:
      return sceneLibrary.start(state, action);
      break;

    case CONTINUE:

      return sceneLibrary.continue(state, action);
      break;

    case PREVIEW:
      return lifeMapLibrary.preview(state, action);
      break;

    case SELECT:
      return lifeMapLibrary.select(state, action);
      break;

    default:
      return state;
  }
}









