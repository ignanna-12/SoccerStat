import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import { requestCompetitions } from './../../redux/leagues-reducer';

class LeaguesContainer extends React.Component {
  componentDidMount() {
    this.props.requestCompetitions();
  }
  render() {
    const onSearch = (value) => console.log(value);
    return (
      <div>
        <Search className={s.search} placeholder="Название лиги" onSearch={onSearch} enterButton />
        <Leagues count={this.props.totalLeaguesCount} leagues={this.props.competitions} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    competitions: state.leaguesPage.competitions,
    totalLeaguesCount: state.leaguesPage.totalLeaguesCount,
  };
};

export default compose(connect(mapStateToProps, { requestCompetitions }))(LeaguesContainer);
