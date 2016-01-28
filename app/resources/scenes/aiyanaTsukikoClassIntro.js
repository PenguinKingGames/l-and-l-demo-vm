export const aiyanaTsukikoClassIntro = {
  background: 'Classroom',
  name: 'The Princess',
  description:  'Aiyana\'s first class',
  initialLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'I am so very pleased to welcome a classmate and comrade',
      portraits: [{
        character: 'Aiyana',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Tsukiko',
        expression: 'OMGAiyana',
        position: 'Right'
      }],
      continueSpec: {
        returnToMap: true
      }
    }
  }
};

