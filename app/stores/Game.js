import { CONTINUE, START } from '../constants/SceneActionTypes';
import { PREVIEW, SELECT } from '../constants/LifeMapActionTypes';

import * as scenes from '../resources/scenes';
import * as lifeMaps from '../resources/lifeMaps';
import * as characters from '../resources/characters';
import * as screenTypes from '../constants/Screens';


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
    availableScenes: ['tsukikoRajaniDemo', 'tsukikoRajaniChoices', 'tsukikoRajaniAfterSchool', 'tsukikoRajaniBetweenClasses', 'tsukikoRajaniFlowers'],
    previewingScene: ''
  },
  character: characters['tsukiko'],
  screen: screenTypes.LIFEMAP
};

export default function game(state = initialState, action) {
  switch (action.type) {

    case START:
      let currentScene = action.scene;
      let scene = {
        ...currentScene,
        currentLine: currentScene.initialLine
      };
      return {
        ...state,
        scene: scene
      };
      break;

    case CONTINUE:
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
      break;

    case PREVIEW:

      let currentMap = state.lifeMap;
      let lifeMap = {
        ...currentMap,
        previewingScene: action.scene
      };

      return {
        ...state,
        lifeMap: lifeMap
      };
      break;

    case SELECT:
      let newScene = state.scenes[action.scene];
      let selectedScene = {
        ...newScene,
        currentLine: newScene.initialLine
      };
      return {
        ...state,
        scene: selectedScene,
        screen: screenTypes.SCENE
      };

      break;

    default:
      return state;
  }
}









