export const tsukikoRajaniChoices = {
  background: 'Classroom',
  name: 'Failing the Witchdel Test',
  description: 'Tsukiko and Rajani discuss a third party romantic interest',
  availability: {
    phase: 'Morning'
  },
  initialLine: 'choices01',
  lines: {
    choices01: {
      name: 'Rajani',
      text: 'Hey princess, I need the advice of someone with lots of, uh, experience.',
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
        nextLine: 'choices02'
      }
    },
    choices02: {
      name: 'Tsukiko',
      text: 'An accomplished young woman like yourself asking for advice?  There cannot be many areas in which I outmatch you; dancing, dragonslaying, perhaps matters of the heart?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Default',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices03'
      }
    },
    choices03: {
      name: 'Rajani',
      text: 'The last...no.  Look, I\'m having a lot of trouble with Zoshia, I couldn\'t get a straight answer out of her with a vat of truth serum and a Helm of Telepathy.  You\'re an expert on...interpersonal...relationships, what does she really think of me?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Flustered',
        position: 'Right'
      }],
      choices: [{
        text: 'You tsundere idiots are both in love',
        continueSpec: {
          nextLine: 'choices04'
        }
      },{
        text: 'Depends on the phase of the moon',
        continueSpec: {
          nextLine: 'choices05'
        }
      }, {
        text: 'She likes girls with green hair',
        continueSpec: {
          nextLine: 'choices06'
        }
      }]
    },
    choices04: {
      name: 'Tsukiko',
      text: 'You are literally the only person confused by this.  You like each other, but you have the combined emotional maturity of a poorly socialised puppy.  Kiss her and get it over with.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Dismissive',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Flustered',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices05: {
      name: 'Tsukiko',
      text: 'We\'re talking about the girl who can\'t decide which eye to wear her stupid eyepatch on from moment to moment.  She doesn\'t have consistent thoughts about anything!',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Dismissive',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Flustered',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices06: {
      name: 'Tsukiko',
      text: 'That reminds me, is it OK to date within the club?  Zoshia\'s been paying me some rather charming complements recently, and she is very fetching, so I thought I might...',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Flirt',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Flustered',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices07: {
      name: 'Rajani',
      text: 'Well, that went better than when I asked Aiyana.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
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
