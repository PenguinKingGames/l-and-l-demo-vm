import * as types from '../constants/CharacterActionTypes';

export function incrementFlower(params) {
  return {
    type: types.INCREMENT,
    params
  }
};

export function decrementFlowers(params) {
  return {
    type: types.DECREMENT,
    params
  }
};/**
 * Created by Jye on 20/07/2015.
 */
