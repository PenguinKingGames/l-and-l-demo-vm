export const aiyanaRajaniClubRoom = {
  background: 'Clubroom',
  name: 'Our Hero Arrives',
  description:  'Aiyana finally shows up in this prototype',
  initialLine: 'aiyana01',
  lines: {
    aiyana01: {
      name: 'Aiyana',
      text: 'Relax, the heroine is here!',
      portraits: [{
        character: 'Aiyana',
        expression: 'Default',
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



