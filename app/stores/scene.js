import { CONTINUE } from '../constants/SceneActionTypes';

const initialState = {
  background: './classroom.jpg',
  currentLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'President, there you are! When is our first expedition? I can\'t wait to see the most famous of dungeons!',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Default',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko02'
      }
    },
    tsukiko02: {
      name: 'Rajani',
      text: 'You\'re...joining? Best news I\'ve had in weeks, recruiting you was going to be step one.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'HappySurprise',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko01'
      }
    }
  }
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
