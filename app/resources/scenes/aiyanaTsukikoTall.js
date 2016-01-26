export const aiyanaTsukikoTall = {
  background: 'Classroom',
  name: 'So damn tall',
  description:  'Mildly ironic given the players',
  initialLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'So tall!',
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

