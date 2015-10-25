import * as screenTypes from '../../constants/Screens';

export default {
  openCharacterSheet: function(state, action) {
    let currentScreenType = state.screen;

    return {
      ...state,
      screen: screenTypes.CHARACTER_SHEET,
      returnScreen: currentScreenType
    };
  },

  returnToPrevious: function(state, action) {
    let returnScreenType = state.returnScreen;

    return {
      ...state,
      screen: returnScreenType
    };
  }
}
