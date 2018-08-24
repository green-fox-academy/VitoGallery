import { connect } from 'react-redux';
import { leftClickAction } from '../action/mainAction';
import Button from '../components/Button';

const mapStateToProps = (state) => {    //eslint-disable-line
  return {
    name: 'LEFT',
  };
};

const mapDispatchToProps = (dispatch) => {   //eslint-disable-line
  return {
    click: () => {
      dispatch(leftClickAction());
    },
  };
};

const LeftClick = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default LeftClick;
