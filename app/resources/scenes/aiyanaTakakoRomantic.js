export const aiyanaTakakoRomantic = {
  background: 'Classroom',
  name: 'They definitely will',
  description:  'Takako takes the initiative',
  availability: true,
  initialLine: 'takako01',
  lines: {
    takako01: {
      name: 'Takako',
      text: 'I don\'t do tsundere, so let\'s skip the excruciating weeks of dancing around and just get married, shall we?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Impressed',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'aiyana01',
        relationship: {
          type: 'lily',
          newRelationship: {
            characterName: 'Takako',
            relationshipLabel: 'Girlfriend',
            powerTree: 'girlfriend',
            power: 'girlfriend1'
          }
        }
      }
    },
    aiyana01: {
      name: 'Aiyana',
      text: 'Am I not supposed to pretend the love triangle with Tsukiko is a thing?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Impressed',
        position: 'Right'
      }],
      continueSpec: {
        returnToMap: true
      }
    }
  }
};

