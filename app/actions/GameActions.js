import * as lifeMapActionTypes from '../constants/LifeMapActionTypes';
import * as sceneActionTypes from '../constants/SceneActionTypes';
import * as genericActionTypes from '../constants/GenericActionTypes';

export function previewScene(scene) {
  return {
    type: lifeMapActionTypes.PREVIEW,
    scene
  }
}

export function selectScene(scene) {
  return {
    type: lifeMapActionTypes.SELECT,
    scene
  };
}

export function startScene(scene) {
  return {
    type: sceneActionTypes.START,
    scene
  };
}

export function continueScene(continueSpec) {
  return {
    type: sceneActionTypes.CONTINUE,
    continueSpec
  };
}

export function openCharacterSheet() {
  return {
    type: genericActionTypes.OPEN_CHARACTER_SHEET
  };
}

export function returnToPrevious() {
  return {
    type: genericActionTypes.RETURN_TO_PREVIOUS
  }
}
