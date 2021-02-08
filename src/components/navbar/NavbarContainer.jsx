import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';
import SelectYearGroup from './SelectYearGroup/SelectYearGroup';
import PropTypes from 'prop-types';

class NavbarContainer extends React.Component {
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

NavbarContainer.propTypes = {
  season: PropTypes.string,
  setSeason: PropTypes.function,
};

export default compose(connect(mapStateToProps, { setSeason }))(NavbarContainer);
