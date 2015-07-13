import { CONTINUE } from '../constants/SceneActionTypes';

import * as scenes from '../resources/scenes';

const initialScene = 'tsukikoRajaniDemo';

//By convention we only mutate the stuff directly declared in this object, not the spread imports
const initialState = {
  ...scenes[initialScene],
  currentLine: 'tsukiko01'
};

export default function scene(state = initialState, action) {
  switch (action.type) {

    case CONTINUE:
      if (action.continueSpec) {
        return {
          ...state,
          currentLine: action.continueSpec.nextLine
        }
      }
      break;

    default:
      return state;
  }
}
