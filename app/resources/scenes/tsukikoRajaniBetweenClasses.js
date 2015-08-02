export const tsukikoRajaniBetweenClasses = {
  background: 'ExteriorStudents',
  name: 'Holding Pattern',
  description:  'Tsukiko and Rajani elegantly spend a few moments afforded by a break in their studies.',
  initialLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'If I stab her, you\'ll cover for me with the Adventurers\' Society, of course.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Dismissive',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Wut',
        position: 'Right'
      }],
      continueSpec: {
        returnToMap: true
      }
    }
  }
};



