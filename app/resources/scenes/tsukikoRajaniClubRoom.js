export const tsukikoRajaniClubRoom = {
  background: 'Clubroom',
  name: 'How the Mighty Have Fallen',
  description:  'Tsukiko and Rajani survey the remains of the Dungeoneering Club\'s palatial chambers',
  initialLine: 'tsukiko01',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'This...is a glorified closet.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Dismissive',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Default',
        position: 'Right'
      }],
      continueSpec: {
        returnToMap: true
      }
    }
  }
};


