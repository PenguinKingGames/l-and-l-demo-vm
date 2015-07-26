import * as lifeMapActionTypes from '../constants/LifeMapActionTypes';
import * as sceneActionTypes from '../constants/SceneActionTypes';

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
  }
}

export function startScene(scene) {
  return {
    type: sceneActionTypes.START,
    scene
  }
}

export function continueScene(continueSpec) {
  return {
    type: sceneActionTypes.CONTINUE,
    continueSpec
  }
}
