import {fromJS, toJS} from 'immutable'

const INITIAL_STATE = fromJS({
  users:{
    '1':{userName:'abcd', password:'password', hostedEvents: [], attendingEvents: []}, //userid = 1
    '2':{userName:'pqrs', password:'password', hostedEvents: [], attendingEvents: []} //userid = 2
  },
  events:{
    '1':{hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: [], maxAttendes: 50}, //eventid = 1
    '2':{hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: [], maxAttendes: 50} //eventid = 2
  }
})

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'TEST_TYPE':
      return state

    default:
      console.log('type not found')
      return state
  }
}
