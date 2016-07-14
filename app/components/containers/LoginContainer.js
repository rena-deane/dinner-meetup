import { connect } from 'react-redux'
import { toJS } from 'immutable'
import Login from '../login'
import { login, signup } from '../../actions'

const mapStateToProps = (state) =>{
  return{
    currentUser: state.get('currentUser')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userName, password) => { dispatch(actions.login(userName, password)) },
    signup: (userName, password) => { dispatch(actions.signup(userName, password)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
