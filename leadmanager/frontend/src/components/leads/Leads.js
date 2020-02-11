import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import the lead actions file 
import { getLeads, deleteLead, getLeadInfo } from '../../actions/leads'



export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,

    }

    componentDidMount() {
        this.props.getLeads();
        // this.props.getLeadInfo();
    }

    render() {
        return (
            <Fragment>
                <h1> Leads </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Message</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.leads.map(lead => (
                            <tr key={lead.id} >
                                <td> {lead.id}</td>
                                <td> {lead.name}</td>
                                <td> {lead.email}</td>
                                <td> {lead.message}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-info btn-sm"
                                        onClick={this.props.getLeadInfo.bind(this, lead.id)}
                                    >
                                        Info
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                        onClick={this.props.deleteLead.bind(this,lead.id)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                <h1> lead detail</h1>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>Message</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leadinfo.map(
                            lead =>
                                <tr key={lead.id}>
                                    <td>{lead.id}</td>
                                    <td>{lead.name}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.message}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </Fragment>

        )
    }
}

const mapStateToProps = (state) => ({
    // map State to Propos from reducer to be attached
    // or handled/ known by the component
    // state.leads stand for lead reducer 
    // and the .leads stand for leads in the reducer  

    leads: state.leads.leads,
    leadinfo: state.leads.leadinfo
});

export default connect(mapStateToProps, { getLeads, deleteLead, getLeadInfo })(Leads)