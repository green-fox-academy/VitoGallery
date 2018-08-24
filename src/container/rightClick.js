import { connect } from 'react-redux';
import { rightClickAction } from '../action/mainAction';
import Button from '../components/Button';

const mapStateToProps = (state) => {
  return {
    name: 'RIGHT',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    click: () => {
      dispatch(rightClickAction());
    },
  };
};

const RightClick = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default RightClick;
