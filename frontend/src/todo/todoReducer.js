const INITIAL_STATE = {
  description: 'Read a book about Redux',
  list: [{
    _id: 1,
    description: 'Pay bills',
    done: true
  }, {
    _id: 2,
    description: 'Call to my brother',
    done: false
  }, {
    _id: 3,
    description: 'Go to Stadium Urbano Caldeira see the Santos F.C',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    
    case 'DESCRIPTION_CHANGED':
      return {
        ...state,
        description: action.payload
      }
      break;

    default:
      return state;
  }
};