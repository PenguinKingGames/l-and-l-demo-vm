import { CONTINUE, START } from '../constants/SceneActionTypes';
import { PREVIEW, SELECT } from '../constants/LifeMapActionTypes';
import { OPEN_CHARACTER_SHEET, RETURN_TO_PREVIOUS } from '../constants/GenericActionTypes';

import * as scenes from '../resources/scenes';
import * as lifeMaps from '../resources/lifeMaps';
import * as characters from '../resources/characters';
import * as powers from '../resources/powers';
import * as screenTypes from '../constants/Screens';

import sceneLibrary from './StoreLibraries/scene';
import lifeMapLibrary from './StoreLibraries/lifeMap';
import genericLibrary from './StoreLibraries/genericLibrary.js';


const initialScene = 'tsukikoRajaniDemo';
const initialSceneData = scenes[initialScene];
const initialMap = 'exteriorMap';
const initialLifeMapData = lifeMaps[initialMap];



//By convention we only mutate the stuff directly declared in this object, not the spread imports
const initialState = {
  scenes: scenes,
  lifeMaps: lifeMaps,
  characters: characters,
  powers: powers,
  scene: {
    ...initialSceneData,
    currentLine: initialSceneData.initialLine
  },
  lifeMap: {
    ...initialLifeMapData,
    availableScenes: ['aiyanaRajaniClubRoom', 'aiyanaTakakoIntro', 'tsukikoRajaniDemo', 'tsukikoRajaniChoices', 'tsukikoRajaniAfterSchool', 'tsukikoRajaniBetweenClasses', 'tsukikoRajaniFlowers', 'tsukikoRajaniClubRoom', 'aiyanaTsukikoTall'],
    previewingScene: ''
  },
  character: characters['aiyana'],
  screen: screenTypes.LIFEMAP,
  returnScreen: screenTypes.LIFEMAP
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

    case OPEN_CHARACTER_SHEET:
      return genericLibrary.openCharacterSheet(state, action);
      break;

    case RETURN_TO_PREVIOUS:
      return genericLibrary.returnToPrevious(state, action);
      break;

    default:
      return state;
  }
}









