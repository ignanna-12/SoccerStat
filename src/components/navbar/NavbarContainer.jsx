import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { Select } from 'antd';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';
import store from '../../redux/redux-store';
import SelectYearGroup from './SelectYearGroup/SelectYearGroup';

const { Option } = Select;

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.setSeason(this.props.season);
  }
  render() {
    return (
      <div className={s.block}>
        <Navbar />
        <SelectYearGroup />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    season: state.userSetting.season,
  };
};

export default compose(connect(mapStateToProps, { setSeason }))(NavbarContainer);
