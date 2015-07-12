import * as types from '../constants/SceneActionTypes';

export function continueScene(continueSpec) {
  return {
    type: types.CONTINUE,
    continueSpec
  }
}
