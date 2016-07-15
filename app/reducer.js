import {fromJS, toJS} from 'immutable'

const INITIAL_STATE = fromJS({
  users:{
    '1':{userName:'abcd', password:'password', hostedEvents: [], attendingEvents: []}, //userid = 1
    '2':{userName:'pqrs', password:'password', hostedEvents: [], attendingEvents: []} //userid = 2
  },
  events:{
    '1':{hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: [], maxAttendes: 50}, //eventid = 1
    '2':{hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: [], maxAttendes: 50} //eventid = 2
  },
  currentUser: 0
})

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      console.log('Reducer LOGIN')
      return state
    case 'SIGN_UP':
      console.log('Reducer SIGN_UP')
      return state
    case 'FILTER_BY_ATTENDING':
      console.log('Reducer FILTER_BY_ATTENDING')
      return state
    case 'FILTER_BY_HOSTING':
      console.log('Reducer FILTER_BY_HOSTING')
      return state
    case 'FILTER_BY_ALL':
      console.log('Reducer FILTER_BY_ALL')
      return state
    case 'CREATE_NEW_EVENT':
      console.log('Reducer CREATE_NEW_EVENT')
      return state
    
    default:
      console.log('type not found', action.type)
      return state
  }
}
