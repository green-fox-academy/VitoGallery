import { connect } from 'react-redux';
import Photo from '../components/Photo';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    index: state.main.index,
  };
};

const DisplayPhoto = connect(
  mapStateToProps,
)(Photo);

export default DisplayPhoto;
