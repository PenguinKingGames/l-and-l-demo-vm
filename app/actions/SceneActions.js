import * as types from '../constants/SceneActionTypes';

export function transitionToScene(scene) {
  return {
    type: types.TRANSITION,
    scene
  }
}

export function startScene(scene) {
  return {
    type: types.START,
    scene
  }
}

export function continueScene(continueSpec) {
  return {
    type: types.CONTINUE,
    continueSpec
  }
}



