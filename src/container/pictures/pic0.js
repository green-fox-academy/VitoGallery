import { connect } from 'react-redux';
import { selectAction } from '../../action/selectAction';
import View from '../../components/View';

const mapStateToProps = (state) => {   //eslint-disable-line
  return {
    index: state.main.index,
    number: 0,
  };
};

const mapDispatchToProps = (dispatch) => {   //eslint-disable-line
  return {
    click: () => {
      dispatch(selectAction(0));
    },
  };
};

const Pic0 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);

export default Pic0;
