import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import s from './Navbar.module.css';
import { Select } from 'antd';
import { setSeason } from '../../redux/user-setting-reducer';
import Navbar from './Navbar';

const { Option } = Select;

const handleChange = (value) => {
  setSeason(value);
};

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.setSeason(this.props.season);
  }
  render() {
    return (
      <div>
        <Navbar />
        <h3 className={s.h3}>Выберите год</h3>
        <Select defaultValue={this.props.season} style={{ width: 120 }} onChange={handleChange}>
          <Option value="2000">2000</Option>
          <Option value="2001">2001</Option>
          <Option value="2002">2002</Option>
          <Option value="2003">2003</Option>
          <Option value="2013">2013</Option>
          <Option value="2014">2014</Option>
          <Option value="2015">2015</Option>
          <Option value="2016">2016</Option>
          <Option value="2017">2017</Option>
          <Option value="2018">2018</Option>
          <Option value="2019">2019</Option>
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

export default compose(connect(mapStateToProps, { setSeason }))(NavbarContainer);
