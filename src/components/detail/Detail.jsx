import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contact: {},
      company: {}
    }
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    axios.get(`http://165.22.60.22/api/v1/contacts/${id}`)
    .then(response => {
      this.setState({ contact: response.data.data, company: response.data.data.company })
    })
    .catch( err => console.log(err))
  }


  render() {
    const { name, email } = this.state.contact;
    const company = this.state.company;
    return (
      <div className="contact">
        <Link to='/contacts' className="button">Back</Link>
        <div className="contact_card">
          <h1>{ name }</h1>
          <h6>E-mail: { email }</h6>
          <div className="company">
            <p><span>Company ID:</span>&nbsp;&nbsp; { company.id }</p>
            <p><span>Company:</span>&nbsp;&nbsp; { company.name }</p>
            <p><span>Revenue:</span>&nbsp;&nbsp; { company.revenue }</p>
            <p><span>Country:</span>&nbsp;&nbsp; { company.country }</p>
          </div>
        </div>
      </div>
    )
  }
}
