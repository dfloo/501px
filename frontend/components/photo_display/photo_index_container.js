import { connect } from 'react-redux';

import Index from './photo_index';
import { fetchPhotos } from '../../actions/photos_actions';

const mapStateToProps = state => {
  return ({
    photos: state.entities.photos
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () =>dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
