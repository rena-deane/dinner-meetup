import { connect } from 'react-redux'
import { toJS } from 'immutable'
import EventList from '../EventList'
//import {  } from '../../actions'

const mapStateToProps = (state) =>{
  return{
  	events: state.get('events')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)