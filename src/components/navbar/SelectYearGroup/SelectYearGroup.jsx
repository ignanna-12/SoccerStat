import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './SelectYearGroup.module.scss';
import { Select } from 'antd';
import { setSeason } from '../../../redux/user-setting-reducer';
import store from '../../../redux/redux-store';
import PropTypes from 'prop-types';

const { Option } = Select;

const handleChange = (value) => {
  store.dispatch(setSeason(value));
};

class SelectYearGroup extends React.Component {
  render() {
    return (
      <div className={s.block}>
        <h3 className={s.h3}>
          Выберите <br />
          год
        </h3>
        <Select defaultValue={this.props.season} className={s.select} onChange={handleChange}>
          <Option value="2015">2015</Option>
          <Option value="2016">2016</Option>
          <Option value="2017">2017</Option>
          <Option value="2018">2018</Option>
          <Option value="2019">2019</Option>
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
        </Select>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    season: state.userSetting.season,
  };
};

SelectYearGroup.propTypes = {
  season: PropTypes.string,
};

export default compose(connect(mapStateToProps, { setSeason }))(SelectYearGroup);
