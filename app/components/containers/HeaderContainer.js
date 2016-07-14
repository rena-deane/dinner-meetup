import { connect } from 'react-redux'
import { toJS } from 'immutable'
import Header from '../Header'
import { filterByAttending, filterByHosting, filterByAll, createNewEvent } from '../../actions'

const mapStateToProps = (state) =>{
  return{
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	filterByAttending: () => {dispatch(filterByAttending())},
  	filterByHosting: () => {dispatch(filterByHosting())},
  	filterByAll: () => {dispatch(filterByAll())},
  	createNewEvent: () => {dispatch(createNewEvent())}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)