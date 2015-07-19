import * as types from '../constants/LifeMapActionTypes';

export function previewScene(scene) {
  return {
    type: types.PREVIEW,
    scene
  }
};

export function selectScene(scene) {
  return {
    type: types.SELECT,
    scene
  }
};
