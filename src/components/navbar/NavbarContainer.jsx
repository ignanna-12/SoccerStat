import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';
import SelectYearGroup from './SelectYearGroup/SelectYearGroup';
import { setFilterValue } from '../../redux/leagues-reducer';

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.setSeason(this.props.season);
    this.props.setFilterValue(this.props.filterValueL);
  }
  render() {
    return (
      <div className={s.block}>
        <Navbar season={this.props.season} filterValueL={this.props.filterValueL} />
        <SelectYearGroup />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    season: state.userSetting.season,
    filterValueL: state.leaguesPage.filterValue,
  };
};

export default compose(connect(mapStateToProps, { setSeason, setFilterValue }))(NavbarContainer);
