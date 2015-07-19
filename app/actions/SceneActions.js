import * as types from '../constants/SceneActionTypes';

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

