var path = require('path')
var knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: path.join(__dirname, '..', '/dev.sqlite3')
	}
})
var config = require('../knexfile.js')['development']

function getAll (table, callback) {
	knex.select('*')
	.from(table)
	.then(function(data) { 
	})
}

function createInitialState () {
	var initialState = {}
	knex('events')
		.select('*')
		.then(function(data) {
			initialState.events = data
			return initialState
		})
		.then(function(initialState) {
			var temp = new Promise(())
			console.log('aaa', initialState)
			var temp = initialState.events.map(function(event) {
				getAttendees(event.id)
			})
			console.log(temp)

			
		})
}

function getAttendees (eventId) {
	console.log(eventId)
	knex('attendingEvents')
		.select('userId')
		.where('eventId', eventId)
		.then(function(data) {
			console.log(data)
			return data
		})
}

function logError(err) {
	console.log('Err in datalib::', err)
}

module.exports = {
	getAll: getAll,
	createInitialState: createInitialState
}

// createInitialState()

// const INITIAL_STATE = fromJS({
//   // users:{
//   //   '1':{userName:'abcd', password:'password', hostedEvents: [], attendingEvents: []}, //userid = 1
//   //   '2':{userName:'pqrs', password:'password', hostedEvents: [], attendingEvents: []} //userid = 2
//   // },
//   events:[
//     {id: 1, hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: []}, //eventid = 1
//     {id: 2, hostID:1, eventName: 'Party', description: 'End of phase party', venue: 'EDA', eventDataTime:'?', attendes: []} //eventid = 2
//   ],
//   currentUser: 0
// })


// const INITIAL_STATE = fromJS({
// 	users: [
// 		{ id: 1, userName: 'AAA', password: 'aaa', hostedEvents: [1, 4], attendedEvents: [2, 3] },
// 		{ id: 2, userName: 'BBB', password: 'bbb', hostedEvents: [2], attendedEvents: [3, 1] },
// 		{ id: 3, userName: 'CCC', password: 'ccc', hostedEvents: [3, 5], attendedEvents: [4, 1] },
// 		{ id: 4, userName: 'DDD', password: 'ddd', hostedEvents: [], attendedEvents: [5, 3] },
// 		{ id: 5, userName: 'EEE', password: 'eee', hostedEvents: [], attendedEvents: [5, 1] }
// 	],
// 	events: 
// 	[
// 		{ id: 1, eventName: 'Alex birthday', ownerUserId: 1, venue: 'Apache', description: 'Come celebrate Alexs birthday', eventDate: '2016-01-01', attendes: [{ userId: 2, userName: 'BBB' }, { userId: 3, userName: 'CCC' }, { userId: 5, userName: 'EEE' }] },
//     { id: 2, eventName: 'Bake appreciation', ownerUserId: 2, venue: 'Baobab', description: 'Come appreciate baking', eventDate: '2016-02-02', attendes: [{ userId: 1, userName: 'AAA' }] },
//     { id: 3, eventName: 'Cat lovers meetup', ownerUserId: 3, venue: 'Charley Noble', description: 'Bring your cat', eventDate: '2016-03-03', attendes: [{ userId: 1, userName: 'AAA' }, { userId: 2, userName: 'BBB' }, { userId: 4, userName: 'DDD' }] },
//     { id: 4, eventName: 'Aviators dinner', ownerUserId: 1, venue: 'Ancestral', description: 'Dont crash your plane', eventDate: '2016-08-08', attendes: [{ userId: 3, userName: 'CCC' }] },
//     { id: 5, eventName: 'Cow eating', ownerUserId: 3, venue: 'Chow', description: 'Yum Num Num', eventDate: '2016-09-09', attendes: [{ userId: 4, userName: 'DDD' }, { userId: 5, userName: 'EEE' }] } 
//   ],
//   currentUser: 0
// }