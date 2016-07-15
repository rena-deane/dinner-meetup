import { connect } from 'react-redux'
import { toJS } from 'immutable'
import CreateNewEvent from '../CreateNewEvent'
import actions from '../../actions'
console.log('actions',actions)
const mapStateToProps = (state) =>{
  return{
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewEvent: (name, venue, date, description) => { dispatch(actions.createNewEvent(name, venue, date, description))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNewEvent)