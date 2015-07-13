export const tsukikoRajaniDemo = {
  background: 'Classroom',
  lines: {
    tsukiko01: {
      name: 'Tsukiko',
      text: 'President, there you are! When is our first expedition? I can\'t wait to see the most famous of dungeons!',
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
        nextLine: 'tsukiko02'
      }
    },
    tsukiko02: {
      name: 'Rajani',
      text: 'You\'re...joining? Best news I\'ve had in weeks, recruiting you was going to be step one.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Default',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'HappySurprise',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko03'
      }
    },
    tsukiko03: {
      name: 'Tsukiko',
      text: 'Oh, if you have a speech prepared, go ahead.  I\'m sure you\'ll cut a dashing figure',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Wry',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'HappySurprise',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko04'
      }
    },
    tsukiko04: {
      name: 'Rajani',
      text: 'If you\'ll indulge me, princess, I\'ll run the club and leave recruiting to you pretty ones.',
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
        nextLine: 'tsukiko05'
      }
    },
    tsukiko05: {
      name: 'Tsukiko',
      text: 'You don\'t think you\'re pretty? Are your mirrors in the habit of lying to you?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Flirt',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Wut',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko06'
      }
    },
    tsukiko06: {
      name: 'Rajani',
      text: 'OK...you\'re good.  Excellent, your first job is to turn that charm on a girl named Aiyana and recruit her. She\'s supposed to be tall and heroic, you\'ll love it.',
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
        nextLine: 'tsukiko07'
      }
    },
    tsukiko07: {
      name: 'Tsukiko',
      text: 'She defeated a dozen knights in the rebellion, did she not?',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Excited',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Flustered',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko08'
      }
    },
    tsukiko08: {
      name: 'Rajani',
      text: 'Probably one or two, but that\'s her. Also any other princesses you think are worth convincing to join.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Excited',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Hmm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko09'
      }
    },
    tsukiko09: {
      name: 'Tsukiko',
      text: 'Alas there are no other princesses at this school. Lovely girls, but I should not call them more than daughters of queens.',
      portraits: [{
        character: 'Tsukiko',
        expression: 'Dismissive',
        position: 'Left'
      }, {
        character: 'Rajani',
        expression: 'Hmm',
        position: 'Right'
      }],
      continueSpec: {
        nextLine: 'tsukiko01'
      }
    }
  }
};

