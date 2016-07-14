# dinner-meetup
dinner meetup

##User Stories
- As a user I can create a profile.
- As a user I can login.
- As a user I can find dinner companions.
- As a user I can post a dinner event.
- As a user I can view a dinner event.
- As a user I can join a dinner event.
- As a user I can see the events I have joined.
- As a user I can leave an event.

##MVP
- Status post is creating an event.

####Stretch
- As a user I can filter events by my area
- As a user(restaurant) I can advertise empty tables.

##Technologies
```
slush pages-react
```
React
  - react-routes
Redux
  - react-redux
  - redux-thunk

Database
  - SQLite
  - Knex

Style
  - Bootstrap
  - 
##Store
- JSON format
- 
##Components
- Header (filter events
- Footer
- EventCard
- Login
- CreateEvent

##Data Structure

###Event
- id
- host_id
- event_name
- description
- venue
- event_time
- array of attendees
- max number of attendees (STRETCH)
- user_id

###User
- id
- user_name (for signing in)
- password
- hosted_events
- attending_events
