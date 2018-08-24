import { connect } from 'react-redux';
import { selectAction } from '../../action/selectAction';
import View from '../../components/View';

const mapStateToProps = (state) => {   //eslint-disable-line
  return {
    index: state.main.index,
    number: 3,
  };
};

const mapDispatchToProps = (dispatch) => {   //eslint-disable-line
  return {
    click: () => {
      dispatch(selectAction(3));
    },
  };
};

const Pic3 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Pic3;
