import {fromJS, toJS} from 'immutable'

const INITIAL_STATE = fromJS({
  users: {
    id: 1,
    userName:'Miles',
    password:'password',
    events:[
      {id: 1, eventName:'Alex birthday', venue: 'Apache', description: 'Come celebrate Alexs birthday', eventDate: '2016-01-01', attend: true, hosting: true},
      {id: 2, eventName:'Bake appreciation', venue: 'Baobab', description: 'Come appreciate baking', eventDate: '2016-02-02', attend: true, hosting: false},
      {id: 3, eventName:'Cat lovers meetup', venue: 'Charley Noble', description: 'Bring your cat', eventDate: '2016-03-03', attend: false, hosting: false},
      {id: 4, eventName:'Aviators dinner' , venue: 'Ancestral', description: 'Dont crash your plane' , eventDate: '2016-08-08', attend: true, hosting: false},
      {id: 5, eventName:'Cow eating', venue: 'Chow', description: 'Yum Num Num', eventDate: '2016-09-09', attend: true, hosting: true}
    ]
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
