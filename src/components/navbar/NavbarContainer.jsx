import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';
import SelectYearGroup from './SelectYearGroup/SelectYearGroup';

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.setSeason(this.props.season);
  }
  render() {
    return (
      <div className={s.block}>
        <Navbar season={this.props.season} />
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
