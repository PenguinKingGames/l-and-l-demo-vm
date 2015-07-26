import { INCREMENT, DECREMENT } from '../constants/CharacterActionTypes';

const initialState = {
  name: 'Tsukiko',
  flowers: [{
    name: 'Rose',
    id: 'rose',
    count: 0
  },{
    name: 'Lily',
    id: 'lily',
    count: 0
  },{
    name: 'Iris',
    id: 'iris',
    count: 0
  },{
    name: 'Hydrangea',
    id: 'hydrangea',
    count: 0
  },{
    name: 'Edelweiss',
    id: 'edelweiss',
    count: 0
  }]
};

export default function scene(state = initialState, action) {
  switch (action.type) {

    case INCREMENT:
      let newFlowers = state.flowers.map(function(flower) {
        if (flower.id === action.params.id) {
          flower.count += action.params.increment;
        }
      });

      return {
        ...state,
        flowers: newFlowers
      };
      break;

    case DECREMENT:
      let newFlowers = state.flowers.map(function(flower) {
        if (flower.id === action.params.id) {
          flower.count -= action.params.decrement;
        }
      });

      return {
        ...state,
        flowers: newFlowers
      };
      break;

    default:
      return state;
  }
}

