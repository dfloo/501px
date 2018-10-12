import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import MainNav from './main_nav_component';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);
