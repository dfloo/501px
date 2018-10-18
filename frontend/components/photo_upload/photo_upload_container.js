import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photos_actions'
import Form from './photo_upload_form';


const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
