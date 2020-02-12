import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLeadsLib, getLeadInfo, getLeads } from '../../actions/leads'


export class LibSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    //     static propTypes = {
    //         lots: PropTypes.array.isRequired,
    //         // leadinfo : PropTypes.array.isRequired,
    //     }

    componentDidMount() {
        this.props.getLeads();
    }
    static propTypes = {
        leads: PropTypes.array.isRequired,

    }

    // render the component
    render() {
        return (
            <Fragment>
                <hr />
                <br />
                <p>
                    select lot, category and support to 
                    show the list of products
                </p>
                <div className="container">

                    <div className="row">
                        <div className="input-group col">
                            <select className="custom-select"
                                id="inputGroupSelect04"
                                aria-label="Example select with button addon"
                                onChange={this.handleChange}
                            >

                                <option defaultValue>Select lot...</option>
                                {/* list of lots */}
                                {this.props.leads.map(
                                    lead =>
                                        <option key={lead.id} value={lead.id}>
                                            {lead.name}
                                        </option>
                                )}
                            </select>
                        </div>
                        <div className="input-group col">
                            <select className="custom-select"
                                id="inputGroupSelect04"
                                aria-label="Example select with button addon"
                                onChange={this.handleChange}
                            >

                                <option defaultValue>Select Category...</option>
                                {/* list of lots */}
                                {this.props.leads.map(
                                    lead =>
                                        <option key={lead.id} value={lead.id}>
                                            {lead.name}
                                        </option>
                                )}
                            </select>
                        </div>
                        <div className="input-group col">
                            <select className="custom-select"
                                id="inputGroupSelect04"
                                aria-label="Example select with button addon"
                                onChange={this.handleChange}
                            >

                                <option defaultValue>Select Support...</option>
                                {/* list of lots */}
                                {this.props.leads.map(
                                    lead =>
                                        <option key={lead.id} value={lead.id}>
                                            {lead.name}
                                        </option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>



                <h1> Products information </h1>
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
                                    // onClick={this.props.getLeadInfo.bind(this, lead.id)}
                                    >
                                        Info
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-sm"
                                    // onClick={this.props.deleteLead.bind(this,lead.id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    // leads: state.leads.leads,

    leads: state.leads.leads,
    leadinfo: state.leads.leadinfo

});

export default connect(mapStateToProps, { getLeadsLib, getLeadInfo, getLeads })(LibSearch)
