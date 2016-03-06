export const aiyanaTakakoClassroom = {
  background: 'Classroom',
  name: 'Only 17',
  description:  'Takako clears up a misconception',
  availability: {
    relationship: {
      characterName: 'Takako',
      powerTree: 'girlfriend'
    }
  },
  initialLine: 'takako01',
  lines: {
    takako01: {
      name: 'Takako',
      text: 'Of course I\'m a student, how old do you think I am?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'PleaseExplain',
        position: 'Right'
      }],
      continueSpec: {
        returnToMap: true
      }
    }
  }
};
