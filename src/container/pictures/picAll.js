import { connect } from 'react-redux';
import { selectAction } from '../../action/selectAction';
import View from '../../components/View';

const PicAll = [];
for (let i = 0; i < 7; i += 1) {
  const mapStateToProps = (state) => {   //eslint-disable-line
    return {
      index: state.main.index,
      number: i,
    };
  };
  const mapDispatchToProps = (dispatch) => {   //eslint-disable-line
    return {
      click: () => {
        dispatch(selectAction(i));
      },
    };
  };
  PicAll[i] = connect(
    mapStateToProps,
    mapDispatchToProps,
  )(View);
}
let Pic0 = PicAll[0];
let Pic1 = PicAll[1];

export default PicAll;
