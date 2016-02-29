export const aiyanaTakakoIntro = {
  background: 'ExteriorEmpty',
  name: 'Introduction',
  description:  'Prototype of the very first scene',
  availability: true,
  initialLine: 'aiyana01',
  lines: {
    aiyana01: {
      name: 'Aiyana',
      text: 'I race halfway across the continent to get here, and they leave me waiting at the entrance for an hour.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Waiting',
        position: 'Left'
      }],
      continueSpec: {
        nextLine: 'takako01'
      }
    },
    takako01: {
      name: 'Takako',
      text: 'My duties are not scheduled around the random arrival of your boat.  Had you arrived with the other students a week ago, I should have been waiting for you.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Waiting',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Default',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'aiyana02'
      }
    },
    aiyana02: {
      name: 'Aiyana',
      text: 'But the schedule apparently allows for overhearing students talking to themselves at the most embarrassing moments.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Default',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako02'
      }
    },
    takako02: {
      name: 'Takako',
      text: 'Quite.  I am Duchess Takako of the Rose Siege, and it is my honour to welcome you to the Siege Conservatory.  You have been assigned to my dormitory; I trust we\'ll work well together.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Quite',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako03'
      }
    },
    takako03: {
      name: 'Takako',
      text: 'You don\'t strike me as the sort to ignore the summons of the school, pray, what delayed you?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Embarrassed',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'PleaseExplain',
        position: 'Right'
      }],
      choices: [{
        text: 'Bandits attacked our ship',
        continueSpec: {
          nextLine: 'aiyana03',
          flag: 'AIYANA_INTRO_BANDITS'
        }
      }, {
        text: 'River monsters',
        continueSpec: {
          nextLine: 'aiyana05',
          flag: 'AIYANA_INTRO_RIVER_MONSTERS'
        }
      }]
    },
    aiyana03: {
      name: 'Aiyana',
      text: 'We had not even reached the Azalea when bandits used a bridge to drop rocks on our ship, then rappelled down to board.  We managed to chase them off, but the ship was taking on water and needed extensive repairs.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Grumpy',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'PleaseExplain',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako04'
      }
    },
    takako04: {
      name: 'Takako',
      text: 'How odd that a transport ship would have a crew that could repel bandits, or that such a well-protected ship would be attacked.  What did you do while awaiting repairs, since obviously you didn\'t take another passing ship?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Grumpy',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Quite',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'aiyana04'
      }
    },
    aiyana04: {
      name: 'Aiyana',
      text: 'No other ship was passing while we blocked the tributary.  I\'m not a carpenter, so I...contacted a local militia and tagged along while they brought the bandits to justice.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Quite',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako05'
      }
    },
    takako05: {
      name: 'Takako',
      text: 'You are a poor liar, I expect the militia helped a little while you crushed the bandits.  Well, this does bode well for the Rose Siege, and poorly for the Azalea and Chrysanthemum.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Impressed',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako08'
      }
    },
    aiyana05: {
      name: 'Aiyana',
      text: 'An old dungeon on the banks of Elderweiss had repopulated with amphibious monsters.  They attacked our ship and holed it below the waterline in a dozen places before assaulting the crew.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Grumpy',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'PleaseExplain',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako06'
      }
    },
    takako06: {
      name: 'Takako',
      text: 'The Elderweiss?  Why did I not receive a report from the Adventurers\' Society?',
      portraits: [{
        character: 'Aiyana',
        expression: 'Grumpy',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Alarmed',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'aiyana06'
      }
    },
    aiyana06: {
      name: 'Aiyana',
      text: 'Well, I\'m a provisional member myself, so when I helped the crew deal with the monsters, technically the issue was resolved.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Alarmed',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako07'
      }
    },
    takako07: {
      name: 'Takako',
      text: 'You...helped...a passenger boat crew against the sort of threat we do not dare commit trained soldiers against.  I\'m sure you were very...helpful.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Impressed',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'takako08'
      }
    },
    takako08: {
      name: 'Takako',
      text: 'It seems your reputation from the rebellion has not been much exaggerated.  I am most pleased, but you should be aware that at this school with its princesses and prodigies you cannot rest on past deeds.  You must strive and achieve here, every day, if you do not wish to fade into the crowd.',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Guarded',
        position: 'Right'
      }],
      continueSpec: {
        conditional: {
          criteria: [{
            type: 'flag',
            flag: 'AIYANA_INTRO_BANDITS',
            nextLine: 'aiyana07'
          }, {
            type: 'flag',
            flag: 'AIYANA_INTRO_RIVER_MONSTERS',
            nextLine: 'aiyana08'
          }]
        }
      }
    },
    aiyana07: {
      name: 'Aiyana',
      text: 'Well let\'s see if you have any bandits!',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Guarded',
        position: 'Right'
      }],
      continueSpec: {
        transitionToScene: 'aiyanaTsukikoClassIntro'
      }
    },
    aiyana08: {
      name: 'Aiyana',
      text: 'Well let\'s see if you have any river monsters!',
      portraits: [{
        character: 'Aiyana',
        expression: 'Humble',
        position: 'Left'
      }, {
        character: 'Takako',
        expression: 'Guarded',
        position: 'Right'
      }],
      continueSpec: {
        transitionToScene: 'aiyanaTsukikoClassIntro'
      }
    }
  }
};

