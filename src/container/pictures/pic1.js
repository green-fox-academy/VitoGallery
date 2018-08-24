import { connect } from 'react-redux';
import { selectAction } from '../../action/selectAction';
import View from '../../components/View';

const mapStateToProps = (state) => {  //eslint-disable-line
  return {
    index: state.main.index,
    number: 1,
  };
};

const mapDispatchToProps = (dispatch) => {  //eslint-disable-line
  return {
    click: () => {
      dispatch(selectAction(1));
    },
  };
};

const Pic1 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Pic1;
