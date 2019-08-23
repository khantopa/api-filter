import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './List.scss';

import Search from '../search/Search';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: []
    }
  }

  

  onNameChange = async(name) => {
    axios.get(`http://165.22.60.22/api/v1/contacts?name=${name}`)
    .then(response => {
      if(response.data.data !== null) {
        this.setState({lists: response.data.data})
      } else {
        this.getAllData();
      }
    })
  }

  onCompanyChange = async(id) => {
    axios.get(`http://165.22.60.22/api/v1/contacts?company_id=${id}`)
    .then(response => {
      if(response.data.data !== null) {
        this.setState({lists: response.data.data})
      } else {
        this.getAllData();
      }
    })
  }

  onRevenueChange = async(value) => {
    axios.get(`http://165.22.60.22/api/v1/contacts?revenue_gte=${value}`)
    .then(response => {
      if(response.data.data !== null) {
        this.setState({lists: response.data.data})
      } else {
        this.getAllData();
      }
    })
  }

  componentDidMount = () => {
    this.getAllData();
  }

  getAllData = () => {
    axios.get('http://165.22.60.22/api/v1/contacts')
    .then(response => {
      this.setState({lists: response.data.data})
    })
    .catch(err => 'err');
  }

  render() {

    const tableRows = this.state.lists.map( row => (
      <tr key={row.id} className="table_body_row">
        <td className="table_body_row_col">
          <Link to={`/contacts/${row.id}`}>{row.name}</Link>
        </td>
        <td className="table_body_row_col">{ row.company.name }</td>
        <td className="table_body_row_col">{ row.company.revenue }</td>
      </tr>
    ));

    const table = (
      <table className="table">
        <thead className="table_head">
          <tr className="table_head_row">
            <td className="table_head_row_col">Name</td>
            <td className="table_head_row_col">Company</td>
            <td className="table_head_row_col">Revenue</td>
          </tr>
        </thead>
        <tbody className="table_body">
          { tableRows }
        </tbody>
      </table>
    );


    return (
      <div className="container">
        <h1>Lists</h1>
        <br/>
        <div className="filter">
          <Search label="Search by name" onInputChange={ this.onNameChange } />
          <Search label="Search by company id" onInputChange={ this.onCompanyChange }/>
          <Search label="Search by revenue" onInputChange={ this.onRevenueChange }/>
        </div>
        { table }
      </div>
    )
  }
}
