import { combineReducers } from 'redux';

const rootReducer = combineReducers({

  todo: () => ({
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
  })

});

export default rootReducer;