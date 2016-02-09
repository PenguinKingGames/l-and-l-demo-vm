export const tsukikoRajaniAfterSchool = {
  background: 'ExteriorEmpty',
  name: 'A Critical Moment',
  description:  'Tsukiko and Rajani debate the most important decision of the day.',
  initialLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'Tea and cake',
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
        returnToMap: true,
        advanceTime: {
          by: 6
        }
      }
    }
  }
};


