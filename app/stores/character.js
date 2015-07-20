const initialState = {
  name: 'Tsukiko',
  flowers: [{
    name: 'Rose',
    id: 'rose',
    count: 0
  },{
    name: 'Lily',
    id: 'lily',
    count: 0
  },{
    name: 'Iris',
    id: 'iris',
    count: 0
  },{
    name: 'Hydrangea',
    id: 'hydrangea',
    count: 0
  },{
    name: 'Edelweiss',
    id: 'edelweiss',
    count: 0
  }]
};

export default function scene(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

