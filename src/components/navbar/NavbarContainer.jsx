import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';
import SelectYearGroup from './SelectYearGroup/SelectYearGroup';
import { setFilterValue } from '../../redux/leagues-reducer';
import { withRouter } from 'react-router-dom';

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeason: '2021',
    };
  }
  componentDidMount() {
    this.props.setSeason(this.props.season);
    this.setState({
      currentSeason: this.props.match ? this.props.match.params.season : this.props.season,
    });
    this.props.setFilterValue(this.props.filterValueL);
  }
  componentDidUpdate(prevProps) {
    if (this.props.season !== prevProps.season) {
      this.setState({
        currentSeason: this.props.match ? this.props.match.params.season : this.props.season,
      });
      this.props.setSeason(this.props.season);
    }
  }
  render() {
    return (
      <div className={s.block}>
        <Navbar season={this.state.currentSeason} filterValueL={this.props.filterValueL} />
        <SelectYearGroup season={this.state.currentSeason} />
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

export default withRouter(
  compose(connect(mapStateToProps, { setSeason, setFilterValue }))(NavbarContainer)
);
