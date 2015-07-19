import { CONTINUE, START } from '../constants/SceneActionTypes';

import * as scenes from '../resources/scenes';

const initialScene = 'tsukikoRajaniDemo';

//By convention we only mutate the stuff directly declared in this object, not the spread imports
const initialState = {
  ...scenes[initialScene],
  currentLine: 'tsukiko01'
};

export default function scene(state = initialState, action) {
  switch (action.type) {

    case START:
      return {
        ...scenes[action.scene],
        currentLine: scenes[action.scene].initialLine
      }
      break;

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
