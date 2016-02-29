export const aiyanaRajaniClubRoom = {
  background: 'Clubroom',
  name: 'Our Hero Arrives',
  description:  'Aiyana finally shows up in this prototype',
  availability: {
    flag: 'AIYANA_INTRO_RIVER_MONSTERS'
  },
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
        nextLine: 'aiyana02'
      }
    },
    aiyana02: {
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
      notice: {
        heading: 'This is you',
        body: 'You really have to wonder what Chie thinks of Alice\'s hyperidealised knight.'
      },
      continueSpec: {
        returnToMap: true
      }
    }
  }
};



