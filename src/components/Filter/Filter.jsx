import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import * as selectors from '../../redux/selectors';

const Filter = ({ value, filterHandler }) => {
  return (
    <div>
      Find contacts by name
      <input
        className={s.filterInput}
        type="text"
        value={value}
        onChange={filterHandler}
      ></input>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: selectors.getFilter(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterHandler: event => dispatch(changeFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);