export const tsukikoRajaniFlowers = {
  background: 'ExteriorStudents',
  name: 'Intrinsic Motivation',
  description: 'Why are princesses so ridiculously heroic anyway?',
  initialLine: 'choices01',
  lines: {
    choices01: {
      name: 'Rajani',
      text: 'Your fangirls were swooning in particularly animated fashion.  What did you do this time?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Hmm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices02'
      }
    },
    choices02: {
      name: 'Tsukiko',
      text: 'I might have captured the flagships of Arudine and Hezhong and forced their Queens to the negotiating table.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Hmm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices03'
      }
    },
    choices03: {
      name: 'Rajani',
      text: 'You...of course you did.  Why must everything be so ostentatiously gallant?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Facepalm',
        position: 'Right'
      }],
      choices: [{
        text: 'For the sake of the world',
        continueSpec: {
          nextLine: 'choices04',
          flowers: {
            rose: 1
          }
        }
      },{
        text: 'To be worthy of my true love',
        continueSpec: {
          nextLine: 'choices05',
          flowers: {
            lily: 2
          }
        }
      }, {
        text: 'A Princess is a paragon',
        continueSpec: {
          nextLine: 'choices06',
          flowers: {
            iris: 1
          }
        }
      }]
    },
    choices04: {
      name: 'Tsukiko',
      text: 'The good that we can achieve is bounded only by the breadth of the sky, and a princess should reach beyond that to the stars.  I can never hold back with a world to serve.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Excited',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Facepalm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices05: {
      name: 'Tsukiko',
      text: 'I have yet to meet her, but my true love waits for me under the same sky, and I shall blaze brightly as a beacon that she may find me!',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Flirt',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Facepalm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices06: {
      name: 'Tsukiko',
      text: 'Even a Princess cannot do everything alone, but by showing her people what is possible, together there is nothing they cannot accomplish.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Facepalm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'choices07'
      }
    },
    choices07: {
      name: 'Rajani',
      text: 'Princesses are insane, got it.',
      portraits: [{
        character: 'Tsukiko',
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
/**
 * Created by Jye on 2/08/2015.
 */
