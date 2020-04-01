import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@material-ui/core';

class Leads extends Component {
  static PropTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Leads List</h1>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Message</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.leads.map(lead => (
                <TableRow key={lead.id}>
                  <TableCell component="th" scope="row">
                    {lead.id}
                  </TableCell>
                  <TableCell align="right">{lead.name}</TableCell>
                  <TableCell align="right">{lead.email}</TableCell>
                  <TableCell align="right">{lead.message}</TableCell>
                  <TableCell align="right">
                    <Button onClick={this.props.deleteLead.bind(this, lead.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // first leads it is the leads reducer second
  // one is the part of the state that we want
  console.log('state of me', state);
  return {
    leads: state.leads.leads
  };
};

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
