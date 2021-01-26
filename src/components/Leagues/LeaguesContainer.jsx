import React from 'react';
import { connect } from 'react-redux';
import Leagues from './Leagues';
import { compose } from 'redux';
import { Input } from 'antd';
import s from './Leagues.module.scss';
const { Search } = Input;
import { requestCompetitions, selectCompetitionsByYear } from './../../redux/leagues-reducer';

// const selectCompetitionsByYear = (year = 2020, competitions) => {
//   console.log(competitions);
//   if (competitions) {
//     return competitions.filter((i) => {
//       return new Date(i.curretSeason.endDate).getFullYear() === +year;
//     });
//   } else {
//     return [];
//   }
// };

class LeaguesContainer extends React.Component {
  componentDidMount() {
    this.props.requestCompetitions();
  }
  render() {
    const onSearch = (value) => console.log(value);
    return (
      <div>
        <Search className={s.search} placeholder="Название лиги" onSearch={onSearch} enterButton />
        <Leagues
          count={this.props.totalLeaguesCount}
          //competitions={this.props.competitions}
          competitions={selectCompetitionsByYear(2020, this.props.competitions)}
        />
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
