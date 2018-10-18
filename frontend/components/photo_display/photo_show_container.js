import { connect } from 'react-redux';

import Show from './photo_show';
import { fetchPhoto } from '../../actions/photos_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    photo: state.entities.photos[ownProps.match.params.photoId]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: (id) => dispatch(fetchPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
